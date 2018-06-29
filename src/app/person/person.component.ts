import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { UrlDownloadService } from '../url-download.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person = {
    id: 1,
    firstName: 'Gagik',
    lastName: 'Gagyan',
    imageUrl: 'https://praddicts-files.ams3.digitaloceanspaces.com/media/users/5a40d7ec0d9db41a04dfd663/avatars/180x180.JPEG',
    image: new Observable()
  };

  myImage = new Observable();

  fetchImage(url: string): Observable<any> {
    return this.urlDownloadService.fetch(url);
  }

  constructor(private urlDownloadService: UrlDownloadService) { }

  ngOnInit() {
    this.myImage = this.fetchImage(this.person.imageUrl);
  }
}
