import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './users/users.component';
import { BuildingComponent } from './building/building.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AptsComponent } from './apts/apts.component';

const routes: Routes = [
  {path: 'building', component: BuildingComponent},
  {path: 'users', component: UsersComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'apts', component: AptsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BuildingComponent, UsersComponent, AuthComponent, AptsComponent]
