import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.scss']
})
export class CardCommentComponent {
  @Input() comment!: Comment;

}
