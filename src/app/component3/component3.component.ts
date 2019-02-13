import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Input()
  nombre: number;

  constructor() { }

  ngOnInit() {
  }

}
