import { Component, OnInit } from '@angular/core';
import {Animal} from '../model/animal';

@Component({
  selector: 'app-demopet',
  templateUrl: './demopet.component.html',
  styleUrls: ['./demopet.component.css']
})
export class DemopetComponent implements OnInit {

  constructor() { }
  Animal;


  cat: Animal = {
    name: 'meo',
    age: 3,
    weight: 10
};
  dog: Animal = {
    name: 'cho',
    age: 5,
    weight: 15
  };

  pig: Animal = {
    name: 'lon',
    age: 1,
    weight: 100
  };

  dongvat = [this.cat, this.dog, this.pig];

ngOnInit() {
  }
}
