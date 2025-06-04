import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const productName = this.route.snapshot.queryParamMap.get('name') || '';

    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁёA-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[А-Яа-яЁёA-Za-z]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+)?\d{11}$/)]],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', [Validators.required, Validators.pattern(/^[А-Яа-яA-Za-z0-9\s\-\/]+$/)]],
      product: [{value: productName, disabled: true}, Validators.required],
      comment: ['']
    });
  }

  submitForm(): void {
    if (this.orderForm.invalid) return;

    this.isLoading = true;

    const formValue = {
      ...this.orderForm.getRawValue()
    };

    this.http.post('https://testologia.ru/order-tea', formValue).subscribe({
      next: () => {
        this.isSubmitted = true;
        this.isLoading = false;
        setTimeout(() => this.router.navigate(['']), 10000)
      },
      error: () => {
        this.isLoading = false;
        this.showError = true;
        setTimeout(() => this.showError = false, 3000);
      }
    });
  }
}
