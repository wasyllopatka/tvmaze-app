import {createAction, props} from '@ngrx/store';

export const navigateRoute = createAction('[Navigate Route]',
    props<{
        routes: Array<string>
    }>()
);

export const navigateToPreviousPage = createAction('[Navigate To Previous Page]');
