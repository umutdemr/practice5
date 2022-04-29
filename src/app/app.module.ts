import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule // register FullCalendar with you app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }