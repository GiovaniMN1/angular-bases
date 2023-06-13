import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string='Iron Man';
  public age:number=45;

  get capitalizedName():string {
    return this.name
  }

  public getHeroDescription():string{
    return`${ this.name} -  ${this.age}`
  }

  changeHero():void{
    this.name='spiderman'
    return

  }
  changeAge():void{
    this.age=46
    return
  }
}
