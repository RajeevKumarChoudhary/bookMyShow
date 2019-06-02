import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ET00068351OrET00101440OrET00096632OrET00102676OrET00083111OrET00101411 } from '../book.service.ts/book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url).pipe(tap(data => {
      console.log(data);
    }));
  }

  getDataObject() {
    var object: ET00068351OrET00101440OrET00096632OrET00102676OrET00083111OrET00101411 = {

    } as any;
    return object;
  }
}
