import {on} from '@ngrx/store';

import {INITIAL_SHOW_STATE} from '../states/initial-state';
import {showSearch, showSearchError, showSearchSuccess, updateShowFavoriteState} from '../actions/show.actions';
import {createLsRehydrateReducer} from '../utils/rehydrate';
import {ShowsState} from '../states/state';
import {Show} from '../../interfaces/show';

export const showsFeatureKey = 'shows';

export const showsReducer = createLsRehydrateReducer(
    'showState',
    INITIAL_SHOW_STATE,
    on(showSearch, (state) => ({...state, loading: true})),
    on(showSearchSuccess, (state, {shows, lastSearchValue}) => ({...state, shows, lastSearchValue, loading: false})),
    on(showSearchError, (state, {error}) => ({...state, loading: false, error})),
    on(updateShowFavoriteState, (state, {show}) => updateFavorite(state, show))
);

function updateFavorite(state: ShowsState, show: Show): ShowsState {
    const newState = {...state};

    const index = newState.shows.map(item => item.id).indexOf(show.id);

    return {
        ...newState, shows: [
            ...state.shows.slice(0, index),
            Object.assign({}, state.shows[index], {...show, isFavorite: !show.isFavorite}),
            ...state.shows.slice(index + 1)
        ]
    };
}
