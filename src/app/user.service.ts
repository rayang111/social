import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000'; // Assure-toi que c'est le bon port pour ton backend Flask

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${username}`);
  }

  updateUser(username: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/update/${username}`, userData);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/delete/${username}`);
  }

  // Ajoute d'autres méthodes pour les opérations CRUD nécessaires
}
