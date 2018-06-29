import { Component, OnInit } from '@angular/core';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  ImgSrc=[];

  constructor(private serveImg: ImgService) {
    let l=this.serveImg.imgsrc.length;
    for(let i=0;i<l;i++)
    {
      this.ImgSrc[i]=this.serveImg.imgsrc[i];
    }
   }

  ngOnInit() { 
  }

}
