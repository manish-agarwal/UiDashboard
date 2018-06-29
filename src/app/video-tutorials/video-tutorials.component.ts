import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
@Component({
  selector: 'app-video-tutorials',
  templateUrl: './video-tutorials.component.html',
  styleUrls: ['./video-tutorials.component.css']
})
export class VideoTutorialsComponent implements OnInit {

status1=false;
status2=false;
status3=false;
videoArray=[];
svar=0;
tcol="";

constructor(private vidServe: VideoService) { 
  let l=this.vidServe.VideoBar.length;
  for(let i=0;i<l;i++)
    this.videoArray[i]=this.vidServe.VideoBar[i];
}

ngOnInit() {
}

data1()
{
  if(this.status1==false){
      this.status1=true;
  }
  else{
      this.status1=false;
  }
// this.svar=1;
// this.tcol="Nasa";
}

data2()
{
  if(this.status2==false){
      this.status2=true;
  }
  else{
      this.status2=false;
  }
// this.svar=2;
// this.tcol="Nasa";
}

data3()
{
  if(this.status3==false){
      this.status3=true;
  }
  else{
      this.status3=false;
  }
// this.svar=3;
// this.tcol="Nasa";
} 

data(x:string)
{
  if(x=="Button 1")
  {
    this.data1();
  }
  else if(x=="Button 2")
  {
    this.data2();
  }
  else
  {
    this.data3();
  }
}

}
