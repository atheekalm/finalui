import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



const materialcomponents = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatCheckboxModule,
  MatMenuModule,
  MatBadgeModule,
  MatDialogModule,
  MatGridListModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [materialcomponents],
  exports: [materialcomponents]
})
export class MaterialModule { }
