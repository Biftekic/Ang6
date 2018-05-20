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
  MatDialogModule,
  MatFormFieldModule,
  MatTableModule,
  MatSlideToggleModule,
  MatSelectModule


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
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule
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
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
