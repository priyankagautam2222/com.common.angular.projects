import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input()boxColor: any;
  @Input() placeholders: any;
  @Output() Inputdata = new EventEmitter();
  TovaluUser:number = 0;
  count:number = 1;
  usertextBTN(inputUser:any){
    if(inputUser.value.length>1)
      {
        console.log(this.TovaluUser = this.TovaluUser + 1); 
        this.Inputdata.emit(inputUser.value);
      }
  }
}
