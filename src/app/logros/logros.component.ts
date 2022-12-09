import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  constructor() { }
  logros : Array<any> = []

  ngOnInit(): void {
    let l1 = {
      logro: "Certificacion en enrrollamiento de jamon ",
      descripcion : "maestria y doctorado en enrrollamiento de jamon"
    }
    let l2 = {
      logro: "Certificacion 2 ",
      descripcion : "descripcion"
    }
    let l3 = {
      logro: "Certificacion 3",
      descripcion : "descripcion"
    }
    let l4 = {
      logro: "Certificacion 4",
      descripcion : "descripcion"
    }

    this.logros.push(l1);
    this.logros.push(l2);
    this.logros.push(l3);
    this.logros.push(l4);
  }

}