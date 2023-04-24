import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { AProductComponent } from './product/a-product/a-product.component';
import { BetterHighlightDirective } from './customdirectives/better-highlight.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservablesdemoComponent } from './observablesdemo/observablesdemo.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ShortenPipe } from './commonpipes/shorten.pipe';
import { FilterPipe } from './commonpipes/filter.pipe';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostComponent } from './blogposts/blogpost/blogpost.component';

const appRoute : Routes = [
  { path: '', component: HomeComponent},
  {path: 'server', component: ServerComponent},
  {path: 'product', component: ProductComponent},
  {path: 'observable', component: ObservablesdemoComponent},
  {path: 'tforms', component: TformsComponent},
  {path: 'rforms', component: RformsComponent},
  {path: 'pipes', component: PipesdemoComponent},
  {path: 'blogs', component: BlogpostsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NamesComponent,
    ProductComponent,
    AddproductComponent,
    AProductComponent,
    BetterHighlightDirective,
    AccountsComponent,
    HomeComponent,
    ObservablesdemoComponent,
    TformsComponent,
    RformsComponent,
    PipesdemoComponent,
    ShortenPipe,
    FilterPipe,
    BlogpostsComponent,
    BlogpostComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule ,RouterModule.forRoot(appRoute)
    , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
