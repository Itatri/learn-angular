import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    //  Trang chính ( path trống thì mậc định là trang chủ)
  { path: '', component: HomeComponent} ,
  { path: 'detail/:id', component: DetailComponent},
  { path: 'create', component: CreateComponent}
];
