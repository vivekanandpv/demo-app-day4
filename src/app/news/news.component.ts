import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // const country = this.ar.snapshot.paramMap.get('country');
    // console.log(country);

    this.ar.paramMap.subscribe({
      next: (p) => console.log(p.get('country')),
    });
  }

  toReports() {
    const car = {
      make: 'Honda',
      model: 'City',
    };

    this.router.navigate(['reports'], {
      fragment: 'my-title',
      queryParams: {
        country: 'india',
        language: 'hn',
      },
      state: car,
    });
  }
}
