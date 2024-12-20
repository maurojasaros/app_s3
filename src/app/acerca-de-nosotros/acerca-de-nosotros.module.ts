import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaDeNosotrosPageRoutingModule } from './acerca-de-nosotros-routing.module';

import { AcercaDeNosotrosPage } from './acerca-de-nosotros.page';
import { LogoComponentComponent } from '../logo-component/logo-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaDeNosotrosPageRoutingModule,
    LogoComponentComponent
  ],
  declarations: [AcercaDeNosotrosPage]
})
export class AcercaDeNosotrosPageModule {}
