import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compiler',
  standalone: false,
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.scss', '../shared.scss'],
})
export class Compiler implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
