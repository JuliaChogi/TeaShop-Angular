import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {OrderComponent} from "./order/order.component";



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  exports: [OrderComponent]
})
export class OrderModule { }
