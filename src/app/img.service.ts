import { Injectable } from '@angular/core';

@Injectable()
export class ImgService {

  imgsrc=[
  {
      "source": "../assets/1.jpg",
      "altText": "Royal Enfield",
      "captionText": "Royal Enfield Ladakh"
  },
  {
    "source": "../assets/2.jpg",
    "altText": "Ladakh",
    "captionText": "Ladakh"
  },
  {
    "source": "../assets/3.jpg",
    "altText": "Leh",
    "captionText": "Leh on a Bullet"
  },
  {
    "source": "../assets/4.jpg",
    "altText": "Travel is Life",
    "captionText": "Travel is Life"
  }
  ]

  constructor() { }


}
