import { NgModule } from "@angular/core";
import { __decorate } from "tslib";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    ListComponent,
    HeroComponent
  ],
  exports:[
    ListComponent,
    HeroComponent

  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{}

