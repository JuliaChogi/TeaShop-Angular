import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./features/main/home/home.component";
import {CatalogComponent} from "./features/products/catalog/catalog.component";
import {OrderComponent} from "./features/order/order/order.component";
import {ProductComponent} from "./features/products/product/product.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
