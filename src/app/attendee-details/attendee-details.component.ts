import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-attendee-details',
  templateUrl: './attendee-details.component.html',
  styleUrls: ['./attendee-details.component.css']
})
export class AttendeeDetailsComponent implements OnInit {
  todaydate;

  newcomponent = 'Show Attendee details';
  months=['Jan','Feb','March'];
  myClickFunction(event) {
    alert('Button is clicked');
    console.log(event);
 }
 changemonths(event) {
  alert('Changed month from the Dropdown' + event);
  console.log(event);
}

  constructor(private myservice: MyserviceService) {

  }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

}
