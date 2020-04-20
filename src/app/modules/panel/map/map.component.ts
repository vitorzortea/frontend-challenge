import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/core/services/places.service';
import { ComentariosService } from 'src/app/core/services/comentarios.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements OnInit {
  public lat = -25.4309092;
  public lng = -49.2455052;
  public zoom = 12.5;

  public isAdd = false;
  public isViewPlace = false;
  public isComment = false;
  public isFavorites = false;

  public oldI = -1;
  public placeSelect: any;

  public formSearch: FormGroup;
  public resultadoPesquisa: object[];
  public resultadoIndex: number[];

  constructor(
    private fb: FormBuilder,
    public placesService: PlacesService,
    public comentarioService: ComentariosService
  ) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: new FormControl(''),
    });
  }

  toggleAdd() {
    this.isViewPlace = false;
    this.isAdd = !this.isAdd;
    this.placesService.imageSelect = '';
  }

  fecharEspecificPlace() {
    this.isAdd = false;
    this.isViewPlace = false;
    this.isFavorites = false;
    this.oldI = -1;
    this.placeSelect = undefined;
  }

  abrirEspecificPlace(i) {
    this.isAdd = false;
    this.isViewPlace = false;
    this.isFavorites = false;
    if (i === this.oldI) {
      this.oldI = -1;
      this.placeSelect = undefined;
    } else {
      this.oldI = i;
      this.isViewPlace = true;
      this.placeSelect = this.placesService.places[i];
    }
  }

  toggleComentario(resposta) {
    this.isAdd = false;
    this.isViewPlace = false;
    this.isFavorites = false;
    this.isComment = resposta;
    if (!this.isComment) {
      this.isViewPlace = true;
    }
  }

  toggleFavorites() {
    this.isViewPlace = false;
    this.isAdd = false;
    this.isFavorites = !this.isFavorites;
  }
  deleteFavorite(index) {
    this.placesService.favorites.splice(index, 1);
  }
  openFavorite(index) {
    this.abrirEspecificPlace(index);
  }

  pesquisarLugar() {
    this.resultadoPesquisa = this.placesService.places.filter(
      (e) => e.name.toLowerCase().indexOf(this.formSearch.value.search.toLowerCase()) !== -1
    );
    console.log(this.resultadoPesquisa);
    if (!this.resultadoPesquisa[0] || !this.formSearch.value.search) {
      this.resultadoPesquisa = undefined;
    }
  }

  abrirPesquisaLugar(place) {
    this.abrirEspecificPlace(
      this.placesService.places.findIndex((e) => e.name === place.name)
    );
  }

}
