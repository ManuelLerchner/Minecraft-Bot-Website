import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-image',
  templateUrl: './smart-image.component.html',
  styleUrls: ['./smart-image.component.scss'],
})
export class SmartImageComponent implements OnInit {
  @Input() src!: string;
  @Input() title!: string;
  @Input() style!: any;

  isFullScreen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleFullScreen(): void {
    this.isFullScreen = !this.isFullScreen;

    document.body.classList.toggle('element-full-screen');
  }
}
