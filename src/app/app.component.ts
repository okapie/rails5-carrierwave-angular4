import { Component, ViewChild, Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

interface Members {
  created_at?: string,
  email: string,
  id: number,
  name: string,
  updated_at?: string,
  url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fileInput') fileInput;

  public title = 'Angular4 + Ruby on Rails 5.1.2';

  public members: Array<Members> = []

  constructor(private http: Http) {
    http.get('http://localhost:3000/users.json')
      .subscribe(res => {
        res.json()
        console.log(res.json())
        this.members[0] = res.json()
      });
  }
}
