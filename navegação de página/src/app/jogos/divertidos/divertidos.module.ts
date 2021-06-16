import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivertidosPageRoutingModule } from './divertidos-routing.module';

import { DivertidosPage } from './divertidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivertidosPageRoutingModule
  ],
  declarations: [DivertidosPage]
})
export class DivertidosPageModule {}
