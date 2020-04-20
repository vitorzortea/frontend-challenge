import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.styl']
})
export class FormAddComponent implements OnInit {

  @Output() isAdd = new EventEmitter();

  public formAdd: FormGroup;
  public novaCategoria = false;

  constructor(
    private fb: FormBuilder,
    public placesService: PlacesService,
  ) { }

  ngOnInit() {
    this.formAdd = this.fb.group({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      score: new FormControl(5),
      photo: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
    });
  }

  adicionar() {
    (
      this.formAdd.controls.name.value &&
      this.formAdd.controls.category.value &&
      this.formAdd.controls.address.value &&
      this.formAdd.controls.about.value &&
      this.formAdd.controls.lat.value &&
      this.formAdd.controls.lng.value
    ) ? this.salvarPonto() : alert('Preencha TODOS os campos do formulário.');
  }
  salvarPonto() {
    this.formAdd.controls.photo.setValue(this.placesService.imageSelect);
    this.placesService.places.push(this.formAdd.value);
    this.placesService.register.push(this.placesService.places.length - 1);
    if (
      this.novaCategoria &&
      !this.placesService.category.includes(this.formAdd.controls.category.value)
    ) {
      this.placesService.category.push(this.formAdd.controls.category.value);
    }
    this.isAdd.emit(false);
  }

  adicionarCategoria() {
    if (this.formAdd.controls.category.value === 'Adicionar Outra Categoria') {
      this.novaCategoria = true;
      this.formAdd.controls.category.setValue('');
    }
  }

}
