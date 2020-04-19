import { Component, OnInit, Input } from '@angular/core';
import { ComentariosService } from 'src/app/core/services/comentarios.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.styl']
})
export class ViewPlaceComponent implements OnInit {

  @Input() placeSelect;
  @Input() index;

  isComment = false;


  constructor(
    public comentarioService: ComentariosService
  ) { }

  ngOnInit() {
    this.isComment = false;
  }

  toggleAdd() {
    this.isComment = !this.isComment;
  }

}
