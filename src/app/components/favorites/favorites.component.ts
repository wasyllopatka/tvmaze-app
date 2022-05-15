import {Component, Inject, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import {takeUntil} from 'rxjs/operators';

import {Show} from '../../interfaces/show';
import {AppStore} from '../../store/states/state';
import {getFavorites} from '../../store/selectors/favorite.selector';
import {DestroyService} from '../../services/destroy.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
    providers: [DestroyService]
})
export class FavoritesComponent implements OnInit {
    favorites: Array<Show>;
    filteredFavorites: Array<Show>;

    constructor(private readonly store: Store<AppStore>, @Inject(DestroyService) readonly destroy$: DestroyService) {
    }

    ngOnInit(): void {
        this.store.select(getFavorites).pipe(takeUntil(this.destroy$)).subscribe(favorites => {
            this.favorites = favorites;
            this.filteredFavorites = favorites;
        });
    }

    searchValueChange(value: string): void {
        this.filteredFavorites = !value || value === ''
            ? this.favorites :
            this.favorites.filter(item => item?.name && item.name.toLowerCase().includes(value.trim().toLowerCase()));
    }
}
