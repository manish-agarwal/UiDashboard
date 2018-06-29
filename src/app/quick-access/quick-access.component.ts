import { Component, OnInit } from '@angular/core';
import { ImgService } from '../img.service';
@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.css']
})
export class QuickAccessComponent implements OnInit {

  // img1="../assets/1.jpg";
  // img2="../assets/2.jpg";
  // img3="../assets/3.jpg";
  // img4="../assets/4.jpg";
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
