import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectCostComponent } from './project-cost/project-cost.component';
const routes: Routes = [
  { path: '', component: ProjectListComponent, pathMatch: 'full' },
  { path: 'create-project', component: ProjectCreateComponent, pathMatch: 'full' },
  { path: 'create-cost', component: ProjectCostComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
