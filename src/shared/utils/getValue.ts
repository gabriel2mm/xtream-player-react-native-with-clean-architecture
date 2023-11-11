import { Observable } from "rxjs";

export const getValue = (observable: Observable<any>) => {
    let value: any;
    observable.subscribe(v => value = v);
    return value;
}