import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    //  Trang chính ( path trống thì mậc định là trang chủ)
  { path: '', component: HomeComponent} 
];
