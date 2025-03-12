import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import  AddUserComponent  from './pages/add-user/add-user.component';
import  DeleteUserComponent  from './pages/delete-user/delete-user.component';
import  ListUserComponent  from './pages/list-user/list-user.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';

export const routes: Routes = [
  { path: 'list-user', component: ListUserComponent },
  { path: 'add-user', component: AddUserComponent },  
  { path: 'delete-user', component: DeleteUserComponent},
  { path: 'ciudades', component: CiudadesComponent},
  { path: '', pathMatch:'full', redirectTo: 'list-user' }
];

@NgModule({  
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
