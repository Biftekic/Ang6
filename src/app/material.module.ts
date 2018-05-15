import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
