import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/home/services/sale.service';
import { Sale } from 'src/app/core/types/type';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  sales!: Sale[];
  constructor(private service: SaleService) {
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.sales = res;
      }
    );
  }
}
