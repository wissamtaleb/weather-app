import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { WeatherBoxComponent } from './weather-box/weather-box.component';
import { SuggestedActivityComponent } from './suggested-activity/suggested-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    WeatherBoxComponent,
    SuggestedActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
