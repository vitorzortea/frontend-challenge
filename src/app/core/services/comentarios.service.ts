import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  comments = [
    [
      {
        nome: 'Mariana Santos',
        nota: 4,
        comentario: 'Local muito agradável para levar a família. Passar horas contemplando a natureza-urbana. Da pra levar os dogs para passearem. Existem em volta bons restaurantes, farmácias e comércios em geral.'
      },
      {
        nome: 'Ágatha Ferreira',
        nota: 2,
        comentario: 'Como quase tudo (público) no país o estado de conservação é lastimável.'
      },
      {
        nome: 'Marcos Azevedo',
        nota: 5,
        comentario: 'Símbolo da migração e cultura japonesa na cidade de Curitiba, encanta os olhos!'
      },
    ],
    [
      {
        nome: 'Luis Barros',
        nota: 4,
        comentario: 'Fiquei completamente encantado com o Jardim Botânico, de primeira achei que seria uma decepção mas foi completamente o contrário.'
      },
      {
        nome: 'Ágatha Ferreira',
        nota: 5,
        comentario: 'Curitiba e seus infinitos jardins e parques... Cada um é especial de um jeito e todos os que visitei são grátis'
      },
    ],
    [
      {
        nome: 'Juarez Santos',
        nota: 5,
        comentario: 'Lugar próximo a varias lojas, bem no centro da cidade, com uma estética bacana'
      },
      {
        nome: 'Marcos Dias',
        nota: 4,
        comentario: 'Linda Catedral de Curitiba, ótimos comércios, bancos, lanchonetes.'
      },
      {
        nome: 'Olga Martins',
        nota: 4,
        comentario: 'Boa localização com grandes opções de comércio e serviços.'
      },
    ],
    [
      {
        nome: 'Jahfar Sadek',
        nota: 5,
        comentario: 'Ponto turístico, bem central, próximo do Passeio Público e do Shopping Muller.'
      },
      {
        nome: 'Mariana Lima',
        nota: 5,
        comentario: 'Se estiver no Centro, vale a pena passar por lá, registrar o lugar!'
      },
      {
        nome: 'Marlise Dias',
        nota: 4,
        comentario: 'Além da Bela homenagem ao Povo Árabe, há uma Biblioteca para estudos.'
      },
    ],
  ];


  constructor() { }
}
