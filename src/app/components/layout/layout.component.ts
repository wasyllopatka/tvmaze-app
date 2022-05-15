import {Component} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],

})
export class LayoutComponent {
    readonly navLinks: Array<Record<string, string>> = [
        {path: 'shows', label: 'Shows'},
        {path: 'favorites', label: 'Favorites'},
    ];

}
