import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";
import {RouterModule} from "@angular/router";
import {MainModule} from "../main/main.module";




@NgModule({
  declarations: [CatalogComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainModule
  ],
  exports: [
    ProductComponent,
    CatalogComponent
  ]
})
export class ProductsModule { }
