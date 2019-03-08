import { Component, OnInit, Input } from '@angular/core';
import { Servidor } from '../app.component';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.scss']
})
export class AmbienteComponent implements OnInit {

  @Input() sistema: any;
  @Input() grupo: any;
  @Input() env: any;

  constructor() { }

  ngOnInit() {
  }

}
