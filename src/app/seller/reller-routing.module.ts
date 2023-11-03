import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller.component';

export const sellerRoutes: Routes = [
    {
        path: '',
        component: SellerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(sellerRoutes)],
    exports: [RouterModule]
})
export class SellerRoutingModule {}