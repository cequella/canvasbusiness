import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VariableListComponent } from './variable-list/variable-list.component';

@NgModule({
    declarations: [
	AppComponent,
	DashboardComponent,
	VariableListComponent
    ],
    imports: [
	BrowserModule,
	MatCardModule,
	MatInputModule,
	MatFormFieldModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
