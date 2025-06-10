import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from './features/main/main.module';
import {ProductsModule} from "./features/products/products.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MainModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
