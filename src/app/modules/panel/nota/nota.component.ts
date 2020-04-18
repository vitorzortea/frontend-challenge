import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.styl']
})
export class NotaComponent implements OnInit {
  @Input() nota;

  constructor() { }

  ngOnInit() {
  }

}
