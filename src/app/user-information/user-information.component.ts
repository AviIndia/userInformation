import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  userInfo!:any
  constructor(private api:ServiceService){}

  ngOnInit():void{

    this.showUserData();
  }

  showUserData()
  {
    this.api.userData().subscribe((result)=>{
      console.warn(result)
      this.userInfo = result;
    })
  }
}
