import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  descricao: string;
  valor: number;
  montante: number = 0;
  fluxo:any = [];
  constructor( private storage : Storage) {
  }

  async ngOnInit() {
    await this.storage.create();
    this.load();
  }

  async entrada(descricao: string , valor:number){
    if(this.descricao != undefined && this.valor != undefined){
      this.fluxo.push({descricao ,valor});
      this.montante += valor;
      await this.storage.set('fluxo', this.fluxo);
      await this.storage.set('montante',this.montante);
    }
  }
  async saida(descricao: string , valor:number){
    if(this.descricao != undefined && this.valor != undefined){
      this.fluxo.push({descricao ,valor});
      this.montante += valor;
      await this.storage.set('fluxo', this.fluxo);
      await this.storage.set('montante',this.montante);
    }
  }
  async apagar(){
    await this.storage.clear();
    this.fluxo = [];
    this.montante=0;
  }
  private load() {
    this.storage.get('fluxo').then((value) => {
    if(value !== null){
      this.fluxo = value;
    }
  })
  this.storage.get('montante').then((value) => {
    if(value !== null){
      this.montante = value;
    }
  })
}
}
