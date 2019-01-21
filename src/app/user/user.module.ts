import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

@NgModule({
  declarations: [UserComponent, RatingBarComponent],
  imports: [
    CommonModule
  ],
  exports: [UserComponent, RatingBarComponent]
})
export class UserModule { }
