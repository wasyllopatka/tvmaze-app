import {createAction, props} from '@ngrx/store';

import {Show} from 'src/app/interfaces/show';

export const loadFavoriteShows = createAction('[Load Favorite Shows]');

export const addFavoriteShow = createAction('[Add Favorite Show]',
    props<{
        show: Show
    }>()
);

export const removeFavoriteShow = createAction('[Remove Favorite Show]',
    props<{
        show: Show
    }>()
);
