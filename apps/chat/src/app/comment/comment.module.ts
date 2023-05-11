import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { SharedModule } from '@may11/shared';
import { SharedThemeModule } from '@may11/shared-theme';

@NgModule({
  declarations: [AddCommentComponent],
  imports: [
  CommonModule,
  SharedModule,
  SharedThemeModule,
  
],
exports:[
  AddCommentComponent
]
})
export class CommentModule {}
