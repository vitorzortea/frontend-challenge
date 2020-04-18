import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { NotaComponent } from './nota/nota.component';
import { FormAddComponent } from './form-add/form-add.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPlaceComponent } from './view-place/view-place.component';


@NgModule({
  declarations: [PanelComponent, HeaderComponent, MapComponent, NotaComponent, FormAddComponent, ViewPlaceComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcd1ZXOWXRTYAD4S3vCDDRy1-JDEU8hdA'
    }),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PanelModule { }
