import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HomeComponent } from './home/home.component';
import { ObserveComponent } from './observe/observe.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'formcontrol', component:FormControlComponent},
  {path:'formgroup', component:FormGroupComponent},
  {path:'formbuilder', component:FormBuilderComponent},
  {path:'obs', component:ObserveComponent},
  {path:'', component:FormControlComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
