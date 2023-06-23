import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  useres = new Array();
  admines = new Array();
  inputEmitData(dataing:any){
   this.useres.push(dataing);
  }
  inpAdminEMit(AdminData:any){
   this.admines.push(AdminData);
  }
}
