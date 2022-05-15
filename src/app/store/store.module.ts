import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './effects/router.effects';
import {showsFeatureKey, showsReducer} from './reducers/show.reducer';
import {ShowEffects} from './effects/show.effects';
import {favoriteShowsFeatureKey, favoriteShowsReducer} from './reducers/favorite.reducer';

const reducers = {
    [showsFeatureKey]: showsReducer,
    [favoriteShowsFeatureKey]: favoriteShowsReducer,
};

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([RouterEffects, ShowEffects])]
})
export class AppStoreModule {
}
