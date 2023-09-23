import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { TreeComponent } from './tree/tree.component';

// const routes: Routes = [];


const routes:Routes =[
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: ContactComponent,
    path: 'contact'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }