import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AirportService } from '@shared/services/airport.service';
import { Observable, catchError, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { Airport, UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label = '';
  @Input() iconePrefixo = '';
  @Input() control!: FormControl;
  @Input() placeholder = '';

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;

  filteredAirports$?: Observable<Airport[]>;

  searchControl = new FormControl('');

  airports: Airport[] = [];

  constructor(private airportService: AirportService,
    private unidadeFederativaService: UnidadeFederativaService) {

  }

  ngOnInit(): void {
    this.searchAirports();
    /*this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados;
        console.log(this.unidadesFederativas);
      });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    );*/
  }

  searchAirports() {
    this.filteredAirports$ = this.control.valueChanges.pipe(
      debounceTime(300), // Atraso para evitar chamadas excessivas
      distinctUntilChanged(), // Evita chamadas repetidas com o mesmo valor
      switchMap(value =>
        this.airportService.searchAirports(value).pipe(
          catchError(() => of([])) // Em caso de erro, retorna uma lista vazia
        )
      )
    );
  }

  filterAirports(query: string): Airport[] {
    const filterValue = query.toLowerCase();
    return this.airports.filter(airport =>
      airport.iata.toLowerCase().includes(filterValue) ||
      airport.name.toLowerCase().includes(filterValue)
    );
  }

  displayFn(airport: Airport): string {
    return airport ? airport.iata : '';
  }

  filtrarUfs(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }

  /*displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }*/
}
