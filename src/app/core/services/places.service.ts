import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places = [
    {
      name: 'Praça do Japão',
      category: 'Praça',
      about: 'Praça paisagística em homenagem à cultura japonesa, com cerejeiras, lagoas e casa de chá tradicional.',
      score: 4.6,
      address: 'Bate',
      city: 'Curitiba',
      countrie: 'Brazil',
      photo: 'praca-japao',
      lat: -25.443419,
      lng: -49.287255,
    },
    {
      name: 'Jardim Botânico de Curitiba',
      category: 'Jardim',
      about: 'Parque fundado em 1991, com uma estufa, um jardim formal no estilo francês e um jardim de sensações.',
      score: 5,
      address: 'Matriz',
      city: 'Curitiba',
      countrie: 'Brazil',
      photo: 'jardim-botanico',
      lat: -25.439716,
      lng: -49.239354,
    },
    {
      name: 'Praça Tiradentes',
      category: 'Praça',
      about: 'A Praça Tiradentes é um espaço público do município de Curitiba. Com 9.026 m².',
      score: 4,
      address: 'Centro',
      city: 'Curitiba',
      countrie: 'Brazil',
      photo: 'praca-tiradente',
      lat: -25.428766,
      lng: -49.272556,
    },
    {
      name: 'Memorial Árabe',
      category: 'Monumento',
      about: 'Memorial Árabe é um ponto turístico em homenagem à cultura árabe localizado no centro da cidade de Curitiba.',
      score: 4,
      address: 'Centro Cívico',
      city: 'Curitiba',
      countrie: 'Brazil',
      photo: 'arabe',
      lat: -25.423219,
      lng: -49.268527,
    },
  ]

  constructor() { }
}
