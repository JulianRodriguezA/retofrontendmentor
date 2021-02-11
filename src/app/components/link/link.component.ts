import { Component, OnInit, Input } from '@angular/core';
import {apiResponse} from '../../interfaces/response.interface';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() links: apiResponse[]; 
  constructor() { }
  ngOnInit(): void {
  }
  copyLink(userInput, link:apiResponse) {
    /* Get the text field */
    //this.link.copied =! this.link.copied;
    link.copied=true;
    userInput.select();
    document.execCommand('copy');
    userInput.setSelectionRange(0, 0)
  }
}
