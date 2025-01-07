import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ApplicationsListComponent } from './components/applications/applications-list/applications-list.component';
import { ApplicationRolesListComponent } from './components/applicationRoles/application-roles-list/application-roles-list.component';
import { BusinessRolesListComponent } from './components/businessRoles/business-roles-list/business-roles-list.component';
import { OrganizationListComponent } from './components/organization/organization-list/organization-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'applications', component: ApplicationsListComponent },
  { path: 'application-roles', component: ApplicationRolesListComponent },
  { path: 'business-roles', component: BusinessRolesListComponent },
  { path: 'organizations', component: OrganizationListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmsRoutingModule {}
