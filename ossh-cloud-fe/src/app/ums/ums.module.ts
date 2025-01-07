import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmsRoutingModule } from './ums-routing.module';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { ApplicationsListComponent } from './components/applications/applications-list/applications-list.component';
import { ApplicationsDialogComponent } from './components/applications/applications-dialog/applications-dialog.component';
import { ApplicationRolesListComponent } from './components/applicationRoles/application-roles-list/application-roles-list.component';
import { ApplicationRolesDialogComponent } from './components/applicationRoles/application-roles-dialog/application-roles-dialog.component';
import { BusinessRolesDialogComponent } from './components/businessRoles/business-roles-dialog/business-roles-dialog.component';
import { BusinessRolesListComponent } from './components/businessRoles/business-roles-list/business-roles-list.component';
import { OrganizationListComponent } from './components/organization/organization-list/organization-list.component';
import { OrganizationDialogComponent } from './components/organization/organization-dialog/organization-dialog.component';

@NgModule({
  declarations: [UsersListComponent, ApplicationsListComponent, ApplicationsDialogComponent, ApplicationRolesListComponent, ApplicationRolesDialogComponent, BusinessRolesDialogComponent, BusinessRolesListComponent, OrganizationListComponent, OrganizationDialogComponent],
  imports: [CommonModule, UmsRoutingModule, SharedModule],
})
export class UmsModule {}
