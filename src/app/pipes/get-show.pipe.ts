import {Pipe, PipeTransform} from '@angular/core';

import {Show} from '../interfaces/show';

@Pipe({name: 'getShowDetails'})
export class GetShowPipe implements PipeTransform {
    transform(show: Show, favorites: Array<Show>): Show {
        if (show && favorites) {
            return {...show, isFavorite: !!favorites.find(item => item.id === show.id)};
        }
    }
}
