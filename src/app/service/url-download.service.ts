import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlDownloadService {

  fetchedData: Observable<Blob>;

  private log(message: string) {
    this.messageService.add('UrlDownloadService: ' + message);
  }

  fetch(url: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get<any>(url, {headers: headers})
    .pipe(
      catchError(this.handleError('fetch: ', []))
    );
  }

  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // fetch(url: string): any {

  //   this.http.get(url).toPromise().then((res: any) => {
  //     const blob = new Blob([res._body], {
  //       type: res.headers.get('Content-Type')
  //     });

  //     const urlCreator = window.URL;
  //     this.fetchedData = this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
  //   });

  //   return this.fetchedData;
  // }

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
    private sanitizer: DomSanitizer) { }
}
