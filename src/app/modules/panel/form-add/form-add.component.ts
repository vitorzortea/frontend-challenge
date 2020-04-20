import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.styl']
})
export class FormAddComponent implements OnInit {
  public formAdd: FormGroup;

  constructor(
    private fb: FormBuilder,
    public placesService: PlacesService,
  ) { }

  ngOnInit() {
    this.formAdd = this.fb.group({
      name: new FormControl(''),
      category: new FormControl(''),
      about: new FormControl(''),
      score: new FormControl(4.5),
      address: new FormControl(''),
      city: new FormControl('Curitiba'),
      countrie: new FormControl('Brazil'),
      photo: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
    });
  }

  adicionar() {
    this.formAdd.controls.photo.setValue(this.placesService.imageSelect);
    this.placesService.places.push(this.formAdd.value);
    console.log(this.formAdd.value);
  }

}
