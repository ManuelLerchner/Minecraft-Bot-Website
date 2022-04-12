import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './sections/about/about.component';

import { HighlightJsModule } from 'ngx-highlight-js';
import { WhatIsAStateMachineComponent } from './sections/what-is-a-state-machine/what-is-a-state-machine.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Compiler } from './sections/Compiler/compiler.component';
import { CodeStructureComponent } from './sections/code-structure/code-structure.component';
import { SmartImageComponent } from './components/smart-image/smart-image.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutComponent,
    WhatIsAStateMachineComponent,
    NavigationComponent,
    Compiler,
    CodeStructureComponent,
    SmartImageComponent,
  ],
  imports: [BrowserModule, HighlightJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
