import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/core/types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  listar(): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.apiUrl}/comments`);
  }
}
