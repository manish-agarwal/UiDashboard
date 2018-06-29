import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

  VideoBar=[
    {
      "ImgSrc": "../assets/img1.png",
      "ButtonName": "PLAY VIDEO",
      "Description": "Add users",
      "Description2": "Learn how to add users"
    },
    {
      "ImgSrc": "../assets/img2.png",
      "ButtonName": "PLAY VIDEO",
      "Description": "Add devices",
      "Description2": "A brief video on adding devices"
    },
    {
      "ImgSrc": "../assets/img3.png",
      "ButtonName": "PLAY VIDEO",
      "Description": "Roles and role assignment",
      "Description2": "Using roles and creating role assignments in Netop Portal"
    }
  ]

  constructor() { }

}
