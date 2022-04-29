import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-upform',
  templateUrl: './sign-upform.component.html',
  styles: [
  ]
})
export class SignUpformComponent implements OnInit {
//service injection, shared amongst other components
  constructor(public service:UserService) { }
  user!: User;
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm){
   
    if(form!= null)
    form.reset();
    this.user={
      Id: 0,
      UserName :'',
      FirstName: '',
      LastName:'',
      Mobile:'',
      Email:'',
      Passwords:'',
      Role:''
    }
  }
 onSubmit(form:NgForm){
   this.service.registeruser().subscribe(
     res =>{
       
     },
     err =>{console.log(err);}
   );
 }
}
