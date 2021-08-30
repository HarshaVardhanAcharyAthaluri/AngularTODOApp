import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetastComponent } from './createtast/createtast.component';

const routes: Routes = [
  {path:"task",component:CreatetastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
