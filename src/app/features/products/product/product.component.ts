import { Component, OnInit } from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {ActivatedRoute, Router} from "@angular/router";
import {TeaService} from "../../../shared/services/tea.service";


@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
tea: TeaType | null = null;
isLoading = true;
  constructor(    private route: ActivatedRoute,
                  private teaService: TeaService,
                  private router: Router) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.teaService.getTea().subscribe(teas => {
      this.tea = teas.find(t => t.id === id) || null;
      this.isLoading = false;
    });
  }

  goToOrder(): void {
    if(this.tea) {
      this.router.navigate(['/order'], {
        queryParams: {name: this.tea.title}
      });
    }
  }
}
