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
    path: 'for-me',
    loadChildren: () => import ('src/app/shared/modules/for-me/for-me.module').then(forMe => forMe.ForMeModule),
  },
  {
    path: 'for-business',
    loadChildren: () => import ('src/app/shared/modules/for-business/for-business.module').then(forBusiness => forBusiness.ForBusinessModule),
  },
  {
    path: 'company',
    loadChildren: () => import ('src/app/shared/modules/company/company.module').then(company => company.CompanyModule),
  },
  {
    path: 'my-cabinet',
    loadChildren: () => import('src/app/shared/modules/my-cabinet/my-cabinet.module').then(myCabinet => myCabinet.MyCabinetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
