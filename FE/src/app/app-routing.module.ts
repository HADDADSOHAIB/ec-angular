import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'store', 
    loadChildren: './store/store.module#StoreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
