import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './theme/layouts/admin/admin.component';
import { NavigationComponent } from './theme/layouts/admin/navigation/navigation.component';
import { NavBarComponent } from './theme/layouts/admin/nav-bar/nav-bar.component';
import { NavRightComponent } from './theme/layouts/admin/nav-bar/nav-right/nav-right.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './theme/shared/shared.module';
import { NavContentComponent } from './theme/layouts/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layouts/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layouts/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layouts/admin/navigation/nav-content/nav-item/nav-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/product/product.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { OrderComponent } from './pages/order/order.component';

import { ToastrModule } from 'ngx-toastr';
import { OrderDetailComponent } from './pages/order/order-detail/order-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableComponent } from './pages/table/table.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        NavigationComponent,
        NavBarComponent,
        NavRightComponent,
        NavContentComponent,
        NavCollapseComponent,
        NavGroupComponent,
        NavItemComponent,
        ProductComponent,
        OrderComponent,
        OrderDetailComponent,
        TableComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule, MatButtonModule, MatDividerModule, MatIconModule,
        MatPaginatorModule, MatTableModule, MatSortModule, MatDialogModule,
        ToastrModule.forRoot({
            timeOut: 3000
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
