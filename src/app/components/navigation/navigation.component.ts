import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() currentSection!: string;

  paragraphs = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'what-is-a-state-machine',
      title: 'What is a State-Machine?',
    },
    {
      id: 'own-programming-language',
      title: 'Own Programming Language',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
