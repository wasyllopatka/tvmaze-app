import {createFeatureSelector, createSelector} from '@ngrx/store';

import {FavoritesState} from '../states/state';
import {favoriteShowsFeatureKey} from '../reducers/favorite.reducer';

export const getFavoritesState = createFeatureSelector<FavoritesState>(favoriteShowsFeatureKey);
export const getFavorites = createSelector(getFavoritesState, (state) => state.favorites);
