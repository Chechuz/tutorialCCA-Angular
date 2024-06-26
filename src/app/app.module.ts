import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { GameModule } from './game/game.module';
import { ClientModule } from './client/client.module';
import { LoanModule } from './loan/loan.module';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CategoryModule,
    ClientModule,
    AuthorModule,
    GameModule,
    LoanModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],

  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
