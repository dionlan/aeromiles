import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FormBuscaService } from 'src/app/shared/services/form-busca.service';
import { PassagensService } from 'src/app/busca/services/passagens.service';
import { DadosBusca, Destaques, Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  destaques?: Destaques;

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) { }
  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    };
    const busca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosBusca() : buscaPadrao;
    console.log('BUSCA INICIAL ANTES - PASSAGENS:', busca);
    this.passagensService.getPassagens(busca)
    .pipe(take(1))
    .subscribe(
      res => {
        this.passagens = res.resultado;
        console.log('BUSCA INICIAL - PASSAGENS:', this.passagens);
        this.formBuscaService.formBusca.patchValue({
          precoMin: res.precoMin,
          precoMax: res.precoMax,
        });
        this.obterDestaques();
      }
    );
  }
  busca(ev: DadosBusca) {
    console.log('BUSCA FILTRO ANTES - PASSAGENS:', this.passagens);
    this.passagensService.getPassagens(ev).subscribe(
      res => {
        console.log('BUSCA FILTRO - PASSAGENS:', this.passagens);
        this.passagens = res.resultado;
      });
  }
  obterDestaques(){
    this.destaques = this.passagensService.obterPassagensDestaques(this.passagens);
  }
}
