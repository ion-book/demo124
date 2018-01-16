import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Hijo1Component } from "../hijo1/hijo1.component";
import { Hijo2Component } from "../hijo2/hijo2.component";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  @ViewChild('child1') childOne:Hijo1Component;
  @ViewChild('child2') childTwo:Hijo2Component;

  constructor() { }

  ngOnInit() {
    this.childOne.emitEvent
    .subscribe(
      res =>
      {
      console.log("Atributo:" + res);
      this.childTwo.dataShared = res;
      }
    );
  }

  change():void{
    this.childOne.function1();
  }

}
