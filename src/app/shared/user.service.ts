import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'https://localhost:44317/api/Login/register'
  formData:User = new User();

  registeruser(){
   return this.http.post(this.baseURL,this.formData);
   
  }
}
