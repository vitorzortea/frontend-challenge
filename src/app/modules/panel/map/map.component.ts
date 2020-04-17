import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/core/services/places.service';


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

  constructor(
    public placesService: PlacesService
  ) { }

  ngOnInit() {
  }

  toggleAdd() {
    this.isAdd = !this.isAdd;
  }

}
