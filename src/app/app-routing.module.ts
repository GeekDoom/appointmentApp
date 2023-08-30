import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //path: '/auth', AuthRouting
    //path: '/auth', AuthRouting
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },
    /* {
        path: '**',
        redirectTo: 'index'
    } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
