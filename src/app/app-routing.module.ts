import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddComponent } from './add/add.component';
import { AddbreakfastComponent } from './addbreakfast/addbreakfast.component';
import { AddsnacksComponent } from './addsnacks/addsnacks.component';
import { AddicComponent } from './addic/addic.component';
import { AddinComponent } from './addin/addin.component';
import { AdditemComponent } from './additem/additem.component';
import { AddthaliComponent } from './addthali/addthali.component';
import { AdminComponent } from './admin/admin.component';
import { AdpwdComponent } from './adpwd/adpwd.component';
import { BuyComponent } from './buy/buy.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { ContactusComponent } from './contactus/contactus.component';

import { FinalComponent } from './final/final.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { SnacksComponent } from './snacks/snacks.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ThaliComponent } from './thali/thali.component';
import { PayComponent } from './pay/pay.component';
import { RegisterComponent } from './register/register.component';
import { SfooditemsComponent } from './sfooditems/sfooditems.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Fooditems',component:FoodItemsComponent},
  {path:'sFooditems',component:SfooditemsComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'brakfast',component:BreakfastComponent},
  {path:'snacks',component:SnacksComponent},
  {path:'thali',component:ThaliComponent},
  {path:'Fooditems/:id',component:BuyComponent},
  {path:'buy',component:BuyComponent},
 {path:'additem',component:AdditemComponent},
  {path:'addfruits',component:AddsnacksComponent},
  {path:'final',component:FinalComponent},
  {path:'pay',component:PayComponent},
  {path:'addi',component:AdditemComponent},
  {path:'addic',component:AddicComponent},
  {path:'addin',component:AddinComponent},
  {path:'adpwd',component:AdpwdComponent},
  {path:'admin',component:AdminComponent},
  {path:'addcere',component:AddbreakfastComponent},
  {path:'addnuts',component:AddthaliComponent},
  {path:'add',component:AddComponent},
   {path:'',component:HomeComponent},
  {path:'**',component:ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }