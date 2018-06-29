import { Injectable } from '@angular/core';

@Injectable()
export class ActivitiesService {

  ActivityArray=
  [
    {
      "dataTarget":"#demo1",
      "ButtonName":"1",
      "line":"Line 1",
      "divId":"demo1",
      "para":"Para 1"
    },
    {
      "dataTarget":"#demo2",
      "ButtonName":"2",
      "line":"Line 2",
      "divId":"demo2",
      "para":"Para 2"
    },
    {
      "dataTarget":"#demo3",
      "ButtonName":"3",
      "line":"Line 3",
      "divId":"demo3",
      "para":"Para 3"
    }
  ]

  constructor() { }

}
