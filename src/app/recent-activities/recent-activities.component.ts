import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {

  localArray=[];

  constructor(private activity: ActivitiesService) { 
    let l=this.activity.ActivityArray.length;
    for(let i=0;i<l;i++)
    {
      this.localArray[i]=this.activity.ActivityArray[i];
    }
  }

  ngOnInit() {
  }

  blocktoggle(i:string)
  {
    if(i.match("^1$"))
    {
    var x = document.getElementById("demo1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }

    else if(i.match("^2$"))
    {
    var x = document.getElementById("demo2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }

    else if(i.match("^3$"))
    {
    var x = document.getElementById("demo3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
  }
}
