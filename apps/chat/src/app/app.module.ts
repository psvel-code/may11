import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedModule } from '@may11/shared';
import { SharedThemeModule } from '@may11/shared-theme';
import { CommentModule } from './comment/comment.module';
// import { TimeServiceService } from 'libs/shared-theme/src/lib/services/time-service.service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SharedModule,
    SharedThemeModule,
    CommentModule,
    // TimeServiceService,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
