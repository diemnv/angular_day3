import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CgvComponent } from './cgv/cgv.component';
import { CgvDetailComponent } from './cgv-detail/cgv-detail.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [CgvComponent, CgvDetailComponent],
  imports: [
    CommonModule, ShareModule
  ],
  exports :[CgvComponent]
})
export class CgvModule { }
