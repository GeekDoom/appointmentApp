import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCardComponent } from './cards/auth-card/auth-card.component';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';


@NgModule({
declarations: [
    AuthCardComponent,
    TopMenuComponent
],
imports: [
    CommonModule,
    RouterModule
],
exports: [
    AuthCardComponent,
    TopMenuComponent
]
})
export class SharedModule { }
