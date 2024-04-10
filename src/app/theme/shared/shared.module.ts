import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party
import { NgClickOutsideDirective } from 'ng-click-outside2';
import 'hammerjs';
import 'mousetrap';

// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DataFilterPipe } from './filter/data-filter.pipe';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@NgModule({
    declarations: [
        DataFilterPipe,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CardComponent,
        BreadcrumbComponent,
        NgClickOutsideDirective,
        NgbDropdownModule,
        NgbNavModule,
        NgbModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CardComponent,
        BreadcrumbComponent,
        DataFilterPipe,
        SpinnerComponent,
        NgbModule,
        NgbDropdownModule,
        NgbNavModule,
        NgClickOutsideDirective
    ]
})
export class SharedModule { }
