import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComentariosService } from 'src/app/core/services/comentarios.service';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.styl']
})
export class ViewPlaceComponent implements OnInit {

  @Input() placeSelect;
  @Input() index;

  @Output() isComment = new EventEmitter();

  public isFavorite: boolean;


  constructor(
    public placesService: PlacesService,
    public comentarioService: ComentariosService
  ) { }

  ngOnInit() {
    this.ifFavorited();
  }

  ativarComment() {
    this.isComment.emit(true);
  }

  favorited() {
    if (!this.isFavorite) {
      this.placesService.favorites.push(this.index);
    } else {
      const indexRemove = this.placesService.favorites.indexOf(this.index);
      this.placesService.favorites.splice(indexRemove, 1);
    }
    this.ifFavorited();
  }
  ifFavorited() {
    this.isFavorite = this.placesService.favorites.includes(this.index);
  }

}
