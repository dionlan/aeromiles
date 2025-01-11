import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BannerComponent } from "./banner/banner.component";
import { BotaoControleComponent } from "./botao-controle/botao-controle.component";
import { CardBuscaComponent } from "./card-busca/card-busca.component";
import { CardCommentComponent } from "./card-comment/card-comment.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FooterComponent } from "./footer/footer.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { SeletorPassageiroComponent } from "./seletor-passageiro/seletor-passageiro.component";
import { MaterialModule } from "../core/material/material.module";
import { RouterModule } from "@angular/router";
import { BackButtonDirective } from './back-button/back-button.directive';

@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardCommentComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    RadioButtonGroupComponent,
    BotaoControleComponent,
    BackButtonDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    CardComponent,
    CardBuscaComponent,
    CardCommentComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    SeletorPassageiroComponent,
    ModalComponent,
    BotaoControleComponent,
    RadioButtonGroupComponent,
    BackButtonDirective
  ]
})
export class SharedModule { }
