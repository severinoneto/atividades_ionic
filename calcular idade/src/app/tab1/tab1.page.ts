import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  datadehoje: string = "";
  datafimdeano: string = "31/12/2021";
  diasrestantes: any;

  constructor() {}
  calcular(){
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    this.datadehoje = dia + "/" + mes + "/" + ano;

  let contador = moment(this.datafimdeano, "DD-MM-YYYY");
  let hoje = moment(this.datadehoje, "DD-MM-YYYY");
  this.diasrestantes = "Faltam: " + contador.diff(hoje, "days") + " dias para acabar o ano";
  }
}
