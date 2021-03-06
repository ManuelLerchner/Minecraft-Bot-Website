import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Minecraft-Bot';

  currentSection = '';

  createAndObserve(element: Element) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;
        }
      });
    }, options);
    observer.observe(element);
  }

  ngAfterViewInit() {
    this.createAndObserve(document.querySelector('#about')!);
    this.createAndObserve(document.querySelector('#what-is-a-state-machine')!);
    this.createAndObserve(document.querySelector('#compiler')!);
    this.createAndObserve(document.querySelector('#code-structure')!);
    this.createAndObserve(document.querySelector('#task-node')!);
    this.createAndObserve(document.querySelector('#action')!);
    this.createAndObserve(document.querySelector('#sequential-node')!);
    this.createAndObserve(document.querySelector('#while-node')!);
    this.createAndObserve(document.querySelector('#if-node')!);
    this.createAndObserve(document.querySelector('#try-node')!);
    this.createAndObserve(document.querySelector('#cobblestone-program')!);
    this.createAndObserve(document.querySelector('#wood-program')!);
    this.createAndObserve(document.querySelector('#conclusion')!);
  }
}
