import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: Http) {
    http.get('http://localhost:3000/users.json')
      .subscribe(res => {
        res.json()
        console.log(res.json())
      });
    // console.log(this.users)
  }

  // users;
  //
  // constructor(private http: Http) {
  //   http.get('http://localhost:3000/users.json')
  //     .subscribe(res => this.users = res.json());
  //   console.log(this.users)
  // }
}
