import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {
  convertTime(time: string): string {
    console.log("sct");
    const [hours, minutes, seconds] = time.split(":");
    const militaryHours = Number(hours) > 12 ? Number(hours) - 12 : hours;
    return `${militaryHours}:${minutes}:${seconds}`;
  }

}
