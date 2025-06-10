import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {PopupComponent} from "./popup/popup.component";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {MainRoutingModule} from "./main-routing.module";
import {DescriptionShortenerPipe} from "../../shared/pipes/description-shortener.pipe";
import {OrderModule} from "../order/order.module";

@NgModule({
  declarations: [
    HomeComponent,
    PopupComponent,
    DescriptionShortenerPipe
  ],
  exports: [
    DescriptionShortenerPipe
  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    MainRoutingModule,
    OrderModule
  ]
})
export class MainModule { }
