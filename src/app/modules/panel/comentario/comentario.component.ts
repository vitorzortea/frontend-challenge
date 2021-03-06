import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ComentariosService } from 'src/app/core/services/comentarios.service';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.styl']
})
export class ComentarioComponent implements OnInit {
  @Input() placeSelect;
  @Input() index;

  @Output() isComment = new EventEmitter();

  public formComment: FormGroup;

  private user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private fb: FormBuilder,
    public comentarioService: ComentariosService,
    public placesService: PlacesService,
  ) { }

  ngOnInit() {
    this.formComment = this.fb.group({
      nome: new FormControl(this.user.name),
      nota: new FormControl('1'),
      comentario: new FormControl(''),
    });
  }

  postComment() {
    this.formComment.controls.nota.setValue( Number(this.formComment.controls.nota.value));
    if (this.comentarioService.comments[this.index]) {
      this.comentarioService.comments[this.index].push(this.formComment.value);
    } else {
      this.comentarioService.comments.push([]);
      this.comentarioService.comments[this.index].push(this.formComment.value);
    }
    this.placesService.atualizarNota();

    this.desativarComment();
  }

  desativarComment() {
    this.isComment.emit(false);
  }

}
