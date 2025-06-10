import { Component, OnInit } from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {TeaService} from "../../../shared/services/tea.service";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
teas: TeaType[] = [];
isLoading: boolean = true;
  constructor(private teaService: TeaService) { }
  ngOnInit(): void {
  this.teaService.getTea().subscribe((data: TeaType []) => {
    this.teas = data;
    this.isLoading = false;
  })
  }
}
