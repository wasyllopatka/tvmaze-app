import {createFeatureSelector, createSelector} from '@ngrx/store';

import {ShowsState} from '../states/state';
import {showsFeatureKey} from '../reducers/show.reducer';

export const getShowState = createFeatureSelector<ShowsState>(showsFeatureKey);
export const getShows = createSelector(getShowState, (state) => state.shows);
export const getLastSearchValue = createSelector(getShowState, (state) => state.lastSearchValue);
export const getShowsLoading = createSelector(getShowState, (state) => state.loading);
