import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { RegistrationComponent } from './registration/registration.component';
import { HouseComponent } from './house/house.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    
    path:'',
    component: HomeComponent
  }
  ,
  {
    path:'house/create',
    component: CreateHouseComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'house/:houseId/login',
    component: LoginComponent
  }
  ,
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'house/:houseId',
    component: HouseComponent
  },
  {
    path: 'house/:houseId/edit',
    component: HouseEditComponent
  },
  {
    path: 'house/:houseId/login',
    component: HouseEditComponent
  },
  {
    path: 'contact',
    component: ContactComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
