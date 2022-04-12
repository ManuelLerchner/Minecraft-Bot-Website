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
  }
}
