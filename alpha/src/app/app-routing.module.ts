import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './shared/modules/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('src/app/shared/modules/home/home.module').then(home => home.HomeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'forMe',
    loadChildren: () => import ('src/app/shared/modules/for-me/for-me.module').then(forMe => forMe.ForMeModule),
  },
  {
    path: 'forBusiness',
    loadChildren: () => import ('src/app/shared/modules/for-business/for-business.module').then(forBusiness => forBusiness.ForBusinessModule),
  },
  {
    path: 'company',
    loadChildren: () => import ('src/app/shared/modules/company/company.module').then(company => company.CompanyModule),
  },
  {
    path: 'myCabinet',
    loadChildren: () => import('src/app/shared/modules/my-cabinet/my-cabinet.module').then(myCabinet => myCabinet.MyCabinetModule),
  },
  {
    path: 'aboutUs',
    loadChildren: () => import('src/app/shared/modules/about-us/about-us.module').then(about => about.AboutUsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('src/app/shared/modules/contact/contact.module').then(contact => contact.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
