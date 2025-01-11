/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleService } from 'src/app/home/services/sale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private servicoSale: SaleService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.servicoSale.listar()
      .subscribe(
        resposta => {
          console.log(resposta);
        }
      );
  }
  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
