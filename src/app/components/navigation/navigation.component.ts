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
      id: 'compiler',
      title: 'Compiler',
    },
    {
      id: 'code-structure',
      title: 'Code Structure',
    },
    {
      id: 'task-node',
      title: 'Task Node',
    },
    {
      id: 'action',
      title: 'What is an Action?',
    },
    {
      id: 'sequential-node',
      title: 'Sequential Node',
    },
    {
      id: 'while-node',
      title: 'While Node',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
