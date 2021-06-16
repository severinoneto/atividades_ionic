import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dataNascimento:string;
  dias:any = "";
  meses:any = "";
  anos:any = "";
  constructor() {}
  calcular(){
  let nascimento = moment(this.dataNascimento);
  let hoje = moment();
  this.dias = hoje.diff(nascimento, "days");
  this.meses = hoje.diff(nascimento, "months");
  this.anos = hoje.diff(nascimento, "years");
  }
}
