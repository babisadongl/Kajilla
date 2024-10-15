import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-screen',
  templateUrl: './blog-screen.component.html',
  styleUrls: ['./blog-screen.component.scss']
})
export class BlogScreenComponent implements OnInit {

  public topBlogImages = [
    { path: '/assets/tvm-2.jpg' },
    { path: '/assets/tvm-3.jpg' },
    { path: '/assets/tvm-4.jpg' },
    { path: '/assets/1111.jpg' },
    { path: '/assets/ai.jpg' },
    { path: '/assets/tvm-5.jpg' },
  ];

  public buttons = [
    { value: 'Summer' },
    { value: 'New Year Special' },
    { value: 'Dashain' },
    { value: 'Vibes' },
    { value: 'Christmas' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(){
    console.log('triggered')
  }

}
