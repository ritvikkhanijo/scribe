import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms'; 
import{AuthService} from '../auth.service';
import{ stringify } from 'querystring';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = "";
  userError: any;
  myForm: FormGroup;
  constructor( public fb: FormBuilder , public authService: AuthService , public router: Router) { 
    this.myForm = this.fb.group({
      email: ["", [Validators.required , Validators.email]],
      password: ["",[Validators.required]]
    })
  }
  onSubmit(loginForm){
    this.authService.login(loginForm.value.email , loginForm.value.password).then((data)=>{
      console.log(data);
      this.message = "Logged in sucessfully";
      this.router.navigate(['/myblogs'])
    }).catch((error)=>{
      console.log(error);
      this.userError = error;
    })  
  }
  ngOnInit() {

  }

}
