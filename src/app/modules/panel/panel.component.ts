import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.styl']
})
export class PanelComponent implements OnInit {
  constructor(
    public placeService: PlacesService
  ) { }

  ngOnInit() {
  }

}
