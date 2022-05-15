import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from './components/layout/layout.component';
import {MatTabsModule} from '@angular/material/tabs';

import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SearchFormComponent} from './components/shared/search-form/search-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ShowsComponent} from './components/shows/shows.component';
import {getAppConfigProvider} from './config/app-config.token';
import {environment} from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ShowImagePipe} from './pipes/show-image.pipe';
import {ShowDetailsComponent} from './components/show-details/show-details.component';
import {MatCardElevationDirective} from './directives/elevation.directive';
import {AppStoreModule} from './store/store.module';
import {ShowsViewComponent} from './components/shared/shows-view/shows-view.component';
import {FavoritesButtonComponent} from './components/shared/favorites-button/favorites-button.component';
import {GetShowPipe} from "./pipes/get-show.pipe";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        FavoritesComponent,
        SearchFormComponent,
        ShowsComponent,
        ShowImagePipe,
        GetShowPipe,
        ShowDetailsComponent,
        MatCardElevationDirective,
        ShowsViewComponent,
        FavoritesButtonComponent,
    ],
    imports: [
        RouterModule.forRoot(APP_ROUTES),
        BrowserModule,
        AppStoreModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatTabsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [
        getAppConfigProvider(environment),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
