import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/home/services/comment.service';
import { Comment } from 'src/app/core/types/type';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comment: Comment[] = [];
  constructor(private service: CommentService) {
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.comment = res;
      }
    );
  }
}
