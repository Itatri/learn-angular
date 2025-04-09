import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    //  Trang chính ( path trống thì mậc định là trang chủ)
  { path: '', component: HomeComponent} ,
  // { path: 'detail/:id', component: DetailComponent},
  // { path: 'create', component: CreateComponent}

  // Áp dung Lazy Loading với các component khác
  // Khi vào trang detail thì sẽ load component detail vào
  // Khi vào trang create thì sẽ load component create vào 
  // Giúp tiết kiệm dung lượng bộ nhớ khi load trang
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/detail.component').then(m => m.DetailComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./create/create.component').then(m => m.CreateComponent)
  }
];
