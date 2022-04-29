import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  // readonly baseURL = 'https://localhost:44317/api/Login/register'
  // formData:User = new User();

  // registeruser(){
  //  return this.http.post(this.baseURL,this.formData);
   
  // }
}
