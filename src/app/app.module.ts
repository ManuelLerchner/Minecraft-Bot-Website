import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './sections/about/about.component';

import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [AppComponent, TitleComponent, AboutComponent],
  imports: [BrowserModule, HighlightJsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
