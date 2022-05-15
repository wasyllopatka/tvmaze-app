import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Store} from '@ngrx/store';

import {Show} from '../../../interfaces/show';

import {addFavoriteShow, removeFavoriteShow} from '../../../store/actions/favorite.actions';
import {updateShowFavoriteState} from '../../../store/actions/show.actions';
import {AppStore} from '../../../store/states/state';

@Component({
    selector: 'app-favorites-button',
    templateUrl: './favorites-button.component.html',
    styleUrls: ['./favorites-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesButtonComponent {
    @Input()
    show: Show;

    constructor(private readonly store: Store<AppStore>) {
    }

    addToFavorites(show: Show): void {
        this.store.dispatch(addFavoriteShow({show}));
        this.store.dispatch(updateShowFavoriteState({show}));
    }

    removeFromFavorites(show: Show): void {
        this.store.dispatch(removeFavoriteShow({show}));
        this.store.dispatch(updateShowFavoriteState({show}));
    }
}
