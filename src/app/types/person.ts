import { Observable } from 'rxjs';

export class Person {
    id: number;
    firstName: string;
    lastName: string;
    imageUrl: string;
    image: Observable<any>;
}
