import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.styl']
})
export class ViewPlaceComponent implements OnInit {

  @Input() placeSelect;

  constructor() { }

  ngOnInit() {
  }

}
