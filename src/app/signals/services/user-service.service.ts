import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUsers, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http= inject(HttpClient);
  private baseUrl= 'https://reqres.in/api/users';


  getUsersById(id: number): Observable<User>{
    return this.http.get<SingleUsers>(`${ this.baseUrl }/${ id }`)
    .pipe(
      map(resp=> resp.data),
      tap( console.log ),
    )
  }

  constructor() { }
}
