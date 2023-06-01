import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo-app-day4';
  layoutVisible$?: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.layoutVisible$ = this.router.events.pipe(
      map((e) => {
        if (e instanceof NavigationEnd) {
          return e.url.includes('login');
        }
        return false;
      })
    );
  }
}
