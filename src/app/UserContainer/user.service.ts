import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = "https://demo9197058.mockable.io/users";

  constructor(private http: HttpClient) {}

  /** GET Users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe();
  }
}
