import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input() sale!: Sale;

  constructor(
    private router: Router
  ) {}

  onDetalheClick(): void {
    this.router.navigate(['detalhe']);
  }
}
