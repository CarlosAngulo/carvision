import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'reports',
                component: ReportsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}