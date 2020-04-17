import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements OnInit {
  lat = -25.4309092;
  lng = -49.2455052;
  zoom = 12.5;

  constructor() { }

  ngOnInit() {
  }

}
