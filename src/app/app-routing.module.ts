import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: 'login',component: LoginComponent 
},{
  path: 'home' , component: HomeComponent
},{
  path: 'signup' , component: SignupComponent
},{
  path: '' , redirectTo: 'home', pathMatch:'full'
},{
  path: 'myblogs' , component: MyblogsComponent , canActivate: [AuthGuard]
},{
  path: 'profile/:id' , component: ProfileComponent
},{
  path: 'view/:postid' , component: ViewComponent
},
{
  path: '**' , redirectTo: 'home'
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 
exports : [RouterModule] 
})
export class AppRoutingModule { }
