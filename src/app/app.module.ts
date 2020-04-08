import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppComponent } from './app.component';
import { NgxEditorModule } from 'ngx-editor';

import { SignupComponent } from './signup/signup.component';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';

let firebaseConfig = {
  apiKey: "AIzaSyBI5gz7bLKZRXL_Tv6fB1FWWzeieIl04Es",
  authDomain: "scribe-811e6.firebaseapp.com",
  databaseURL: "https://scribe-811e6.firebaseio.com",
  projectId: "scribe-811e6",
  storageBucket: "scribe-811e6.appspot.com",
  messagingSenderId: "605455779133",
  appId: "1:605455779133:web:28e6a5a4c0fd3561d8b154",
  measurementId: "G-J0GQNTHBNY"
};

 
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();