import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formdata;
  emailid;

  constructor(private myservice: MyserviceService) { }
  ngOnInit() {
     this.formdata = new FormGroup({
        emailid: new FormControl('angular@gmail.com'),
        passwd: new FormControl('abcd1234')
     });
  }
  onClickSubmit(data) {this.emailid = data.emailid; }
}
