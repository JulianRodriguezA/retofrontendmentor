import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../service/link.service'
import {apiResponse} from '../../interfaces/response.interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers:[ApiService]
})
export class FormComponent implements OnInit {
  link={
    linkString:""
  }
  loading:boolean;
  newLinks: apiResponse[];
  constructor(private _apiService: ApiService) {
    this.newLinks = [];
    this.loading=undefined;
   }

  ngOnInit(): void {
  }
  useApi(apiForm:NgForm){
    if(apiForm.invalid){
      Object.values(apiForm.controls).forEach((control)=>{
        console.log("control");
        control.markAsTouched()
        console.log(control);
      })
    }
    if (apiForm.valid){
      this.loading=true;
      this._apiService.getLink(apiForm.value.link).subscribe(
        response=>{
          //console.log(response);
          this.newLinks.push(response);
          this.loading=false;
        },
        error=>{
          console.log(error);
        }
      );
      apiForm.reset();
    }
  }
}
