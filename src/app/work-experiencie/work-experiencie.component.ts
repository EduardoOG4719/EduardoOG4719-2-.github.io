import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experiencie',
  templateUrl: './work-experiencie.component.html',
  styleUrls: ['./work-experiencie.component.css']
})
export class WorkExperiencieComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
            fecha: "2022-2022",
            ubicacion: "Nogales, Ver.",
            puesto: "Repartidor",
            empresa: "Empresa familiar",
            logros : [
                {descripcion : "entregas a tiempo siempre" },
                {descripcion : "ni un solo reclamo nunca"}
            ]
    };

    let work2 = {
            fecha: "2021-2022",
            ubicacion: "Orizaba, Ver.",
            puesto: "apoyo en hardware en municipio de nogales",
            empresa: "Cobaev",
            logros : [
                {descripcion : "todo siempre funcionando al 100"},
                {descripcion : "sin problemas"}
            ]
    };
    
    let work3 = {
            fecha: "2021-2022",
            ubicacion: "Nogales, Ver.",
            puesto: "Empresa de videojjuegos",
            empresa: "easports",
            logros : [
                {descripcion : "Creador de nuevo videojuego" },
                {descripcion : "Creacion de nuevo sistema en juego de futbol"}
            ]
    };  

    let work4 = {
            fecha: "2021-2022",
            ubicacion: "Orizaba, Ver.",
            puesto: "jefe",
            empresa: "familiar",
            logros : [
                {descripcion : "clientes satisfechos" },
                {descripcion : "sin problemas"}
            ]
    };          
    

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
    this.workExperience.push(work4);

  }

}