import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FindComponent } from './components/modules/pokemon/find/find.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayComponent } from './components/modules/pokemon/play/play.component';
import { NavComponent } from './components/modules/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FindComponent,
    PlayComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
