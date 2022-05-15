import {Routes} from '@angular/router';

import {LayoutComponent} from './components/layout/layout.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {ShowsComponent} from './components/shows/shows.component';
import {ShowDetailsComponent} from './components/show-details/show-details.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: `/shows`,
                pathMatch: 'full'
            },
            {
                path: 'shows',
                children: [
                    {
                        path: '',
                        component: ShowsComponent,
                        data: {
                            title: 'Shows',
                        }
                    },
                    {
                        path: 'details/:id',
                        children: [
                            {
                                path: '',
                                component: ShowDetailsComponent,
                                data: {
                                    navigateSource: 'shows',
                                },
                            }
                        ],
                    },
                ]
            },
            {
                path: 'favorites',
                children: [
                    {
                        path: '',
                        component: FavoritesComponent,
                        data: {
                            title: 'Favorites',
                        }
                    },
                ]
            }
        ]
    }
];
