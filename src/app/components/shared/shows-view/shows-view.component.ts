import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Store} from '@ngrx/store';

import {Show} from '../../../interfaces/show';
import {AppStore} from '../../../store/states/state';

@Component({
    selector: 'app-shows-view',
    templateUrl: './shows-view.component.html',
    styleUrls: ['./shows-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowsViewComponent {

    @Input()
    shows: Array<Show>;

    constructor(private readonly store: Store<AppStore>) {
    }

    trackById(index: number, show: Show): number {
        return show.id;
    }

    navigateToDetails(baseRoute: string, id: number): void {
        this.store.dispatch({type: '[Navigate Route]', routes: [baseRoute, 'details', id]});
    }

}
