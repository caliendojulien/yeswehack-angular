import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {YwhComponent} from './components/ywh/ywh.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { TagComponent } from './components/shared/tag/tag.component';
import { ConfigComponent } from './components/shared/config/config.component';
import { TagsComponent } from './components/shared/tags/tags.component';
import { TagsDropdownComponent } from './components/shared/tags-dropdown/tags-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    YwhComponent,
    TagComponent,
    ConfigComponent,
    TagsComponent,
    TagsDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
