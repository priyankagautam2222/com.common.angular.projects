import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @ViewChild('myFormTemplate') myFormTemplate:NgForm | undefined;
  defaultCourse:string="Angular";
  usermodel:string = "";
  
   //FormData
   formselectvalue:boolean = false; 
   uservalue='userfirst';
   emailvalue="emian@hbh";
   coursevalue="mca";
   gendervalue = 'male';
  onsubmmited(form:NgForm){
    console.log(this.myFormTemplate);
    this.formselectvalue = true;
    this.uservalue = this.myFormTemplate?.value.userDetail.username;
    this.emailvalue = this.myFormTemplate?.value.userDetail.email;
    this.coursevalue = this.myFormTemplate?.value.select;
    this.gendervalue = this.myFormTemplate?.value.flexRadioDefault;
    this.myFormTemplate?.reset();
  }
  genders = [
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]
  defaultGender:string = "Male";
  
  /*onsetvalue(){//this method use complete reset value all form element
    this.myFormTemplate?.setValue({
      //#userDetail is a form group name form group name is ngModelGroup in html page
      userDetail:{
        username:"Re-enter value",//username,email select use only name ex:-username and email this is name
        email:''
      },
      select:'',
      flexRadioDefault:''

    });
  }*/
  onsetvalue(){//patchvalue use perticuler only one value is set in one field
    this.myFormTemplate?.form.patchValue({
      userDetail:{
        username:"Resetvalue"
      }
    })
  }


 
}
