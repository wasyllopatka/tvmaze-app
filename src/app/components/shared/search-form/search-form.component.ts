import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {DestroyService} from '../../../services/destroy.service';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DestroyService]
})
export class SearchFormComponent implements OnInit {
    searchTerm!: string;
    searchInput = new FormControl();

    @Input()
    loading: boolean | undefined;

    @Input()
    debounceTime = 500;

    @Output()
    searchValue = new EventEmitter<string>();

    constructor(private readonly cd: ChangeDetectorRef, @Inject(DestroyService) readonly destroy$: DestroyService) {
    }

    ngOnInit(): void {
        this.searchInput.valueChanges
            .pipe(debounceTime(this.debounceTime), takeUntil(this.destroy$))
            .subscribe((searchValue) => {
                this.searchTerm = searchValue;
                this.searchValue.emit(searchValue);
            });
    }

    setValue(value: string): void {
        this.searchInput.setValue(value, {emitEvent: false});
        this.searchTerm = value;
        this.cd.detectChanges();
    }

    clear(event$: { stopPropagation: () => void; }): void {
        event$.stopPropagation();
        this.searchTerm = '';
        this.searchValue.emit('');
    }

}
