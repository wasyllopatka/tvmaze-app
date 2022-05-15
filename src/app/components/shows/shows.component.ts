import {AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild} from '@angular/core';

import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

import {Show} from '../../interfaces/show';

import {AppStore} from '../../store/states/state';
import {showSearch} from '../../store/actions/show.actions';
import {getLastSearchValue, getShows, getShowsLoading} from '../../store/selectors/show.selector';

import {DestroyService} from '../../services/destroy.service';
import {SearchFormComponent} from '../shared/search-form/search-form.component';

@Component({
    selector: 'app-shows',
    templateUrl: './shows.component.html',
    styleUrls: ['./shows.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService],
})
export class ShowsComponent implements OnInit, AfterViewInit {
    shows$!: Observable<Array<Show>>;
    showsLoading$!: Observable<boolean>;

    @ViewChild(SearchFormComponent)
    searchForm: SearchFormComponent;

    constructor(private readonly store: Store<AppStore>, @Inject(DestroyService) readonly destroy$: DestroyService) {
    }

    ngOnInit(): void {
        this.shows$ = this.store.select(getShows);
        this.showsLoading$ = this.store.select(getShowsLoading);
    }

    ngAfterViewInit(): void {
        this.store.select(getLastSearchValue)
            .pipe(
                filter((value) => !!value),
                takeUntil(this.destroy$)).subscribe(lastValue => this.searchForm.setValue(lastValue)
        );
    }

    searchValueChange(value: string): void {
        this.store.dispatch(showSearch({searchTerm: value}));
    }
}
