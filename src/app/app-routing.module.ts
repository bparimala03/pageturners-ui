import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { NewReleaseComponent } from '../top/new-release/new-release.component';
import { SideCategoryComponent } from './side-category/side-category.component';
import { AdultsComponent } from '../top/adults/adults.component';
import { KidsBooksComponent } from '../top/kids-books/kids-books.component';
import { BestsellersComponent } from '../top/bestsellers/bestsellers.component';
import { BooksDetailsComponent } from '../top/books-details/books-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeMainComponent },
    { path: 'books-detail', component: BooksDetailsComponent }, 
    { path: 'new-release', component: NewReleaseComponent },
    { path: 'side-category', component: SideCategoryComponent },
    { path: 'adults', component: AdultsComponent },
    { path: 'kids-books', component: KidsBooksComponent },
    { path: 'bestsellers', component: BestsellersComponent },
    { path: 'booksdetails', component: BooksDetailsComponent },
    
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  