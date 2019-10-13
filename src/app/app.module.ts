import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FleetComponent } from './fleet/fleet.component';
import { FooterComponent } from './footer/footer.component';
import { VesselAlertsComponent } from './vessel-alerts/vessel-alerts.component';
import { VesselDetailsComponent } from './vessel-details/vessel-details.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FleetComponent,
    FooterComponent,
    VesselAlertsComponent,
    VesselDetailsComponent,
    ProductsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FleetComponent },
      { path: 'ourfleet', component: FleetComponent },
      { path: 'ourproducts', component: ProductsComponent },
      { path: 'vessels/:id', component: VesselDetailsComponent },
      { path: 'card', component: CardComponent},
      { path: '**', component: FleetComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
