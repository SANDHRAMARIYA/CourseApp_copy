import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor() { }



  courseTitle=""
  courseDuration=""
  courseDescription=""
  courseDate=""
  courseVenue=""

readValues=()=>{
  let data = {
    "courseTitle":this.courseTitle,
  "courseDuration":this.courseDuration,
  "courseDescription":this.courseDescription,
  "courseDate":this.courseDate,
  "courseVenue":this.courseVenue
  }
  console.log(data)
}



  ngOnInit(): void {
  }

}
