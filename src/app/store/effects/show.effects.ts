import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {showSearch, showSearchSuccess} from '../actions/show.actions';
import {TvmazeShowsApiService} from '../../services/shows-api.service';
import {EMPTY} from 'rxjs';
import {getFavorites} from '../selectors/favorite.selector';

@Injectable({providedIn: 'root'})
export class ShowEffects {
    showSearch$ = createEffect(() =>
        this.actions$.pipe(
            ofType(showSearch),
            withLatestFrom(this.store.select(getFavorites)),
            mergeMap(([{searchTerm}, favorites]) => {
                return this.showApiService.showSearch(searchTerm).pipe(
                    map(shows =>
                        (showSearchSuccess({
                            shows: shows.map(show => ({
                                ...show,
                                isFavorite: !!favorites.find(item => item.id === show.id)
                            })),
                            lastSearchValue: searchTerm
                        }))
                    ),
                    catchError(() => EMPTY)
                );
            }),
        )
    );

    constructor(
        private actions$: Actions,
        private showApiService: TvmazeShowsApiService,
        private store: Store
    ) {
    }
}
