import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FtproductsComponent } from './ftproducts/ftproducts.component';
import { HeroComponent } from './hero/hero.component';
import { TrustBadgesComponent } from './trust-badges/trust-badges.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';
import { EmailListService } from './email-list.service';
import { ProductDataService } from './product-data.service';
import { CartService } from './cart.service';
import { AddtocartModalComponent } from './addtocart-modal/addtocart-modal.component';
import { ModalService } from './modal.service';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FtproductsComponent,
    HeroComponent,
    TrustBadgesComponent,
    FooterComponent,
    NewsletterformComponent,
    AddtocartModalComponent,
    HomeComponent,
    CatalogComponent,
    CheckoutComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [EmailListService, ProductDataService, CartService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
