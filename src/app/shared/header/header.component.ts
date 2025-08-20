import {Component, OnInit} from '@angular/core';
import {SearchService} from "../services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';

  constructor(private searchService: SearchService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.searchService.search$.subscribe(query => {
      this.searchQuery = query;
    });
  }

  onSearch() {
    this.searchService.setSearch(this.searchQuery);
    this.router.navigate(['/catalog']);
  }

  resetSearch() {
    this.searchQuery = '';
    this.searchService.clearSearch();
    this.router.navigate(['/catalog']);
  }
}
