import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards:any[]=[
    {
      title : "Brand Recognition",
      text : "Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content", 
      img: "../../../assets/images/icon-brand-recognition.svg"
    },
    {
      title:"Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      img: "../../../assets/images/icon-detailed-records.svg"
    },
    {
      title:"Fully Customizable",
      text:"Improve brand awareness and content discoverability trough customizable links, supercharging audience engagemnt.",
      img:"../../../assets/images/icon-fully-customizable.svg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
