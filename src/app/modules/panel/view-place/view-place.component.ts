import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComentariosService } from 'src/app/core/services/comentarios.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.styl']
})
export class ViewPlaceComponent implements OnInit {

  @Input() placeSelect;
  @Input() index;

  @Output() isComment = new EventEmitter();


  constructor(
    public comentarioService: ComentariosService
  ) { }

  ngOnInit() { }

  ativarComment() {
    this.isComment.emit(true);
  }

}
