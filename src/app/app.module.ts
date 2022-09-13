import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { TabPanelComponent } from './components/container/tab-panel/tab-panel.component';
import { TabComponent } from './components/container/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TabPanelComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
