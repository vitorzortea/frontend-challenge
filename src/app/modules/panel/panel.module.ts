import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { NotaComponent } from './nota/nota.component';


@NgModule({
  declarations: [PanelComponent, HeaderComponent, MapComponent, NotaComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcd1ZXOWXRTYAD4S3vCDDRy1-JDEU8hdA'
    })
  ]
})
export class PanelModule { }
