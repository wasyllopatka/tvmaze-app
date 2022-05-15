import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {map} from 'rxjs/operators';

import {navigateRoute, navigateToPreviousPage} from '../actions/router.actions';

@Injectable()
export class RouterEffects {

    navigateRoute$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(navigateRoute),
                map(({routes}) => this.router.navigate(routes)
                )
            ),
        {dispatch: false}
    );

    navigateToPreviousPage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(navigateToPreviousPage),
                map(() => this.location.back())
            ),
        {dispatch: false}
    );

    constructor(
        private readonly actions$: Actions,
        private readonly location: Location,
        private readonly router: Router) {
    }
}
