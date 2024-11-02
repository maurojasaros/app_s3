import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DeportesPageRoutingModule } from './deportes-routing.module';

import { DeportesPage } from './deportes.page';
import { LogoComponentComponent } from '../logo-component/logo-component.component';
import { GameCardComponent } from '../game-card/game-card.component'; // Asegúrate de importar el componente aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportesPageRoutingModule,
    LogoComponentComponent,
  ],
  declarations: [DeportesPage, GameCardComponent] // Aquí declaramos el componente
})
export class DeportesPageModule {}


