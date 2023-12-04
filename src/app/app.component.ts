import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';


  msg:string="Welcome to Angular"

  constructor( @Inject (HttpClient) private httpClient:HttpClient){}

getWelcomeMsg(){

 // this.msg="Welcome to angular welcome msg";

 this.httpClient.get("http://localhost:9090/welcome",{responseType:"text"})
 .subscribe(response => {

  this.msg= response;
 });
}

 getWishMsg(){
 this.httpClient.get("http://localhost:9090/wish",{responseType:"text"})
 .subscribe(response => {

  this.msg= response;
 });
 }
}

