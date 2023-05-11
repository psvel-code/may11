import { Component  } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TimeServiceService } from 'libs/shared-theme/src/lib/services/time-service.service';

@Component({
  selector: 'may11-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent   {
  time ="14:50:00";
  changeTime!:string;
   constructor(private timeService:TimeServiceService){}
   ngOnInit(): void {
    this.changeTime=this.timeService.convertTime(this.time)
   }
  // AfterContentChecked(): void {
  //   this.changeTime=this.timeService.convertTime(this.time)
  //   console.log("ct");
    
  // }
  applyTime(event: Event) {
    console.log((event.target));
    const timeValue = (event.target as HTMLInputElement).value;
    console.log("timeValue",timeValue);
    this.changeTime=this.timeService.convertTime(timeValue)
  }
 
}
