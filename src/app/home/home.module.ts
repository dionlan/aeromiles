import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SaleComponent } from "./sales/sale.component";
import { MaterialModule } from "src/app/core/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { CommentModule } from "./comments/comment.module";

@NgModule({
  declarations: [
    HomeComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule,
    CommentModule
  ],
  exports: [
    HomeComponent,
    SaleComponent
  ]
})
export class HomeModule { }
