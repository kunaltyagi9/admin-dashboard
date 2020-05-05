import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

// import { MatIconModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatDividerModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { AreaComponent } from './widgets/area/area.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule, // For seperation between Side bar and Dashboard
    BrowserAnimationsModule,
    MatButtonModule, //to create button icons
    MatIconModule, // to create icons in header inside MatToolBar Module
    MatToolbarModule, // in header, to create nav
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule, //created a thin line between dashboard and footer 
    MatListModule, // created list in side-bar part
    HighchartsChartModule, // to create line chart,
    FlexLayoutModule, // bring list in a single line
    MatCardModule, // created cards in dashboard
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
