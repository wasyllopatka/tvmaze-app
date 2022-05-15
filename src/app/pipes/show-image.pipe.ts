import {Pipe, PipeTransform} from '@angular/core';

import {Image} from '../interfaces/show';

@Pipe({name: 'showImage'})
export class ShowImagePipe implements PipeTransform {
    private readonly noimageUrl: string = './assets/images/noimage.png';

    transform(image: Image): string {
        return image?.medium as string ?? this.noimageUrl;

    }
}
