
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'create-user' , component: CreateUserComponent},
  {path: 'update-user/:id' , component: UpdateUserComponent },

  {path: '' , redirectTo: 'users' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
