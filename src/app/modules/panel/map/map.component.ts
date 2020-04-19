import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/core/services/places.service';
import { ComentariosService } from 'src/app/core/services/comentarios.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements OnInit {
  lat = -25.4309092;
  lng = -49.2455052;
  zoom = 12.5;

  isAdd = false;
  isViewPlace = false;
  oldI = -1;
  placeSelect: any;

  constructor(
    public placesService: PlacesService,
    public comentarioService: ComentariosService
  ) { }

  ngOnInit() {}

  toggleAdd() {
    this.isViewPlace = false;
    this.isAdd = !this.isAdd;
  }

  fecharEspecificPlace() {
    this.isAdd = false;
    this.isViewPlace = false;
    this.oldI = -1;
    this.placeSelect = undefined;
  }

  abrirEspecificPlace(i) {
    this.isAdd = false;
    this.isViewPlace = false;
    if (i === this.oldI) {
      this.oldI = -1;
      this.placeSelect = undefined;
    } else {
      this.oldI = i;
      this.isViewPlace = true;
      this.placeSelect = this.placesService.places[i];
      console.log(this.placeSelect);
    }
  }

  toggleComentario() {
    this.isAdd = false;
    this.isViewPlace = false;
  }

}
