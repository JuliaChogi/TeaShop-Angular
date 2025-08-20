import {Component, OnInit} from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {TeaService} from "../../../shared/services/tea.service";
import {SearchService} from "../../../shared/services/search.service";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  searchQuery: string = '';
  teas: TeaType[] = [];
  isLoading: boolean = true;

  constructor(private teaService: TeaService, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.search$.subscribe(query => {
      this.searchQuery = query;
      this.loadTeas(query);
    });
  }

  loadTeas(search?: string) {
    this.isLoading = true;
    this.teaService.getTea(search).subscribe({
      next: (data) => {
        this.teas = data;
        this.isLoading = false;
      },
      error: () => {
        this.teas = [];
        this.isLoading = false;
      }
    });
  }
}
