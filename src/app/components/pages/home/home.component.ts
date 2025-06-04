import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subject, takeUntil, timer} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
showPopup: boolean = false;
private destroy$ = new Subject<void>();
  constructor(private router: Router) { }
  ngOnInit(): void {
    timer(10000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showPopup = true;
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onPopupClose(): void {
    this.showPopup = false;
  }

  onPopupNavigate(): void {
    this.router.navigate(['/catalog'])
  }
}
