import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {
    transform(val: number): number {
        return Math.sqrt(val);
    }
}
