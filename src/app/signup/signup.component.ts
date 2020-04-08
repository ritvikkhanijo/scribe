import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms'; 
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup
  constructor( public fb: FormBuilder , public authService : AuthService ) {
    this.myForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required , Validators.minLength(8)]],
      conpassword: ['',[Validators.required]]

    });
   }
   onSubmit(signupform){
      let email: string =  signupform.value.email;
      let password: string = signupform.value.password;
      let firstName : string = signupform.value.firstName;
      let lastName: string = signupform.value.lastName;
      this.authService.signup(email,password,firstName,lastName).then(()=>{
        
      }).catch((error)=>{
        console.log(error);
      });
   }
  
   ngOnInit() {
  }

}
