import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user.component';
import { ListUserComponent } from './user/list-user.component';


const appRout: Routes = [
  { path: 'addUser', component: AddUserComponent },
  { path: 'userList', component: ListUserComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRout),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
