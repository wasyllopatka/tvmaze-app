import {createAction, props} from '@ngrx/store';

import {Show} from 'src/app/interfaces/show';

export const showSearch = createAction('[Show Search]',
    props<{
        searchTerm: string;
    }>()
);

export const showSearchSuccess = createAction('[Show Search Success]',
    props<{
        shows?: Array<Show>,
        lastSearchValue?: string
    }>()
);

export const showSearchError = createAction('[Show Search Error]',
    props<{ error: string }>()
);

export const updateShowFavoriteState = createAction('[Update Show Favorite State]',
    props<{ show: Show }>()
);
