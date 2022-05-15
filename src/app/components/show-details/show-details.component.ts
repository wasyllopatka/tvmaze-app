import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {filter, takeUntil} from 'rxjs/operators';
import {DestroyService} from '../../services/destroy.service';
import {TvmazeShowsApiService} from '../../services/shows-api.service';
import {Show} from '../../interfaces/show';
import {Observable} from 'rxjs';
import {AppStore} from '../../store/states/state';
import {Store} from '@ngrx/store';
import {navigateToPreviousPage} from '../../store/actions/router.actions';
import {getFavorites} from '../../store/selectors/favorite.selector';

@Component({
    selector: 'app-show-details',
    templateUrl: './show-details.component.html',
    styleUrls: ['./show-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [DestroyService],
})
export class ShowDetailsComponent implements OnInit {
    favorites$: Observable<Array<Show>>;
    showDetails$: Observable<Show>;

    constructor(
        private readonly showApiService: TvmazeShowsApiService,
        private readonly route: ActivatedRoute,
        private readonly store: Store<AppStore>,
        @Inject(DestroyService) readonly destroy$: DestroyService) {
    }

    ngOnInit(): void {
        this.favorites$ = this.store.select(getFavorites);

        this.route.params
            .pipe(
                takeUntil(this.destroy$),
                filter((id) => !!id)
            ).subscribe(({id}: Params) => (this.showDetails$ = this.showApiService.getShowDetails(id))
        );
    }


    navigateToShows(): void {
        this.store.dispatch(navigateToPreviousPage());
    }
}
