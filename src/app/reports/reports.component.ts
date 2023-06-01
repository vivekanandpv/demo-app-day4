import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  constructor(private ar: ActivatedRoute, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log('state', state);
  }

  ngOnInit(): void {
    // const q = this.ar.snapshot.queryParams;
    // console.log(q);

    this.ar.queryParams.subscribe({
      next: (q) => console.log(q),
    });

    // console.log(this.ar.snapshot.fragment);

    this.ar.fragment.subscribe({
      next: (f) => console.log('fragment', f),
    });
  }
}
