import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
currentDate = new Date().getFullYear()
  constructor() { }

  ngOnInit(): void {
  }

    protected readonly Date = Date;
}
