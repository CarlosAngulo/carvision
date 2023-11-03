import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MagicLinkComponent } from './auth/magic-link/magic-link.component';
import { AppComponent } from './app.component';
import { AccountComponent } from './pages/profile/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'magic-link',
    component: MagicLinkComponent,
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: AccountComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
