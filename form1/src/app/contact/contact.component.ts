import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 @ViewChild('myForm') myForm:NgForm | undefined;
 defaultvalue:any="JAVASCRIPT";
 gendered=[
  {id:1,value:'Mail'},
  {id:2,value:'Femail'}
 ]
 defaultedvalue="Mail";
 namuj="priyanka";
 username={
  text:null,
 }
  constructor() { }

  ngOnInit(): void {
  }

  onsubmitBTN()
  {
    console.log("submitted"); 
  }
  onsubmited(myFormes:NgForm){
    console.log(this.myForm);
  }
  //set value
  setusername(){
    this.myForm?.setValue({
      userDetail:{
        usernames: 'uxtrands',
        email:''
      }
      
    })
  }



}
