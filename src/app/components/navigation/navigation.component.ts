import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() currentSection!: string;

  paragraphs = [
    {
      name: 'Introduction',
      links: [
        {
          id: 'about',
          title: 'About',
        },
        {
          id: 'what-is-a-state-machine',
          title: 'What is a State-Machine?',
        },
      ],
    },
    {
      name: 'Project-Scope',
      links: [
        {
          id: 'compiler',
          title: 'Compiler Idea',
        },
        {
          id: 'code-structure',
          title: 'Code Structure',
        },
      ],
    },
    {
      name: 'Nodes',
      links: [
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
        },
        {
          id: 'if-node',
          title: 'If Node',
        },
        {
          id: 'try-node',
          title: 'Try Node',
        },
      ],
    },
    {
      name: 'Example-Programs',
      links: [
        {
          id: 'cobblestone-program',
          title: 'Cobblestone Program',
        },
        {
          id: 'wood-program',
          title: 'Wood Program',
        },
      ],
    },
    {
      name: 'Conclusion',
      links: [
        {
          id: 'conclusion',
          title: 'Conclusion',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
