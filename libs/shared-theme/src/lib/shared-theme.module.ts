import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './component/input/input.component';
import { TimePipePipe } from './pipes/time-pipe.pipe';
import { SharedModule } from '@may11/shared';
// import { TimeServiceService } from './services/time-service.service';
import {TimeServiceService} from './services/time-service.service'
@NgModule({
  imports: [CommonModule,
  SharedModule,
  // TimeServiceService
],
 
  declarations: [InputComponent, TimePipePipe,],
  exports:[
    InputComponent,
    TimePipePipe,
  ],
  providers:[
    TimeServiceService
  ]
})
export class SharedThemeModule {}
