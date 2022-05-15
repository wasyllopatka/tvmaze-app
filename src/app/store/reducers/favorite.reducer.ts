import {on} from '@ngrx/store';

import {INITIAL_FAVORITES_STATE} from '../states/initial-state';
import {addFavoriteShow, loadFavoriteShows, removeFavoriteShow} from '../actions/favorite.actions';
import {createLsRehydrateReducer} from '../utils/rehydrate';
import {FavoritesState} from '../states/state';
import {Show} from '../../interfaces/show';

export const favoriteShowsFeatureKey = 'favorites';

export const favoriteShowsReducer = createLsRehydrateReducer(
    'favoritesState',
    INITIAL_FAVORITES_STATE,
    on(loadFavoriteShows, (state) => ({...state})),
    on(addFavoriteShow, (state: FavoritesState, {show}) => addFavorite(state, show)),
    on(removeFavoriteShow, (state: FavoritesState, {show}) => removeFavorite(state, show)),
);

function addFavorite(state: FavoritesState, show: Show): FavoritesState {
    const newState = {...state};
    const favorite = [{...show, isFavorite: true}];

    return {...newState, favorites: [...newState.favorites, ...favorite]};
}

function removeFavorite(state: FavoritesState, show: Show): FavoritesState {
    const newState = {...state};

    return {...newState, favorites: newState.favorites.filter(item => item.id !== show.id)};
}
