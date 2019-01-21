import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfDatePipe } from './cf-date.pipe';

@NgModule({
  declarations: [CfDatePipe],
  imports: [
    CommonModule
  ],
  exports: [CfDatePipe]
})
export class ShareModule { }
