import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from './detalhe.component';
import { SharedModule } from '../shared/shared.module';
import { CommentModule } from '../home/comments/comment.module';


@NgModule({
  declarations: [
    DetalheComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CommentModule
  ]
})
export class DetalheModule { }
