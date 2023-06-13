import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[]=['Spiderman', 'Ironman', 'Hulk'];
  public deleted?:string;


  deleteArray():void{
    this.deleted= this.heroNames.pop();

}
}
