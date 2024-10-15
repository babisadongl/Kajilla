import { Component, OnInit } from '@angular/core';
import { CampaignModel } from 'src/app/models/campaignModel';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _service: BlogService) {
    this._service.getSponsers().subscribe((res: any) => {
      this.sponser = this.mapGalleryAndSponsor(res.data);
    })
    this._service.getGalleries().subscribe((res: any) => {
      this.gallery = this.mapGalleryAndSponsor(res.data);
    })
  }

  public editorsChoiceImages = [
    { path: '/assets/tvm-2.jpg' },
    { path: '/assets/tvm-3.jpg' },
    { path: '/assets/tvm-4.jpg' },
    { path: '/assets/tvm-5.jpg' },
    { path: '/assets/tvm-6.jpg' },
    { path: '/assets/1111.jpg' },
    { path: '/assets/final.jpg' },
    { path: '/assets/ai.jpg' },
    { path: '/assets/logo format.jpg' },
    { path: '/assets/1.jpg' },
    { path: '/assets/2.jpg' },
  ];

  public tvmPhotos = [
    { path: '/assets/tvm-2.jpg' },
    { path: '/assets/tvm-3.jpg' },
    { path: '/assets/tvm-4.jpg' },
    { path: '/assets/tvm-5.jpg' },
    { path: '/assets/tvm-6.jpg' },
    { path: '/assets/1111.jpg' },
    { path: '/assets/final.jpg' },
    { path: '/assets/ai.jpg' },
    { path: '/assets/logo format.jpg' },
  ]

  public recentBlogImages = [
    { path: '/assets/tvm-2.jpg' },
    { path: '/assets/tvm-3.jpg' },
    { path: '/assets/tvm-4.jpg' },
    { path: '/assets/1111.jpg' },
    { path: '/assets/ai.jpg' },
    { path: '/assets/tvm-5.jpg' },
    // { path: '/assets/3.jpg' },
    // { path: '/assets/1 (1).jpg' },
    // { path: '/assets/2.jpg' },
    // { path: '/assets/4.jpg' },
  ];

  public topBlogImages = [
    { path: '/assets/tvm-2.jpg' },
    { path: '/assets/tvm-3.jpg' },
    { path: '/assets/tvm-4.jpg' },
    { path: '/assets/1111.jpg' },
    { path: '/assets/ai.jpg' },
    { path: '/assets/tvm-5.jpg' },
  ];

  gallery: Array<CampaignModel> = [
    // {
    //   image: '/assets/1-min.jpg',
    //   thumbImage: '/assets/1-min.jpg',
    //   // alt: 'Image 1',
    // }, {
    //   image: '/assets/2-min.jpg',
    //   thumbImage: '/assets/2-min.jpg',
    //   // alt: 'Image 2'
    // }, {
    //   image: '/assets/3-min.jpg',
    //   thumbImage: '/assets/3-min.jpg',
    //   // alt: 'Image 3'
    // }, {
    //   image: '/assets/4-min.jpg',
    //   thumbImage: '/assets/4-min.jpg',
    //   // alt: 'Image 4'
    // }, {
    //   image: '/assets/5-min.jpg',
    //   thumbImage: '/assets/5-min.jpg',
    //   // alt: 'Image 5'
    // }, {
    //   image: '/assets/6-min.jpg',
    //   thumbImage: '/assets/6-min.jpg',
    //   // title: 'Image 6',
    //   // alt: 'Image 6'
    // }
    // , {
    //   image: '/assets/8-min.jpg',
    //   thumbImage: '/assets/8-min.jpg',
    //   // title: 'Image 6',
    //   // alt: 'Image 6'
    // }
    // , {
    //   image: '/assets/1-min.jpg',
    //   thumbImage: '/assets/1-min.jpg',
    //   // title: 'Image 6',
    //   // alt: 'Image 6'
    // }, {
    //   image: '/assets/4-min.jpg',
    //   thumbImage: '/assets/4-min.jpg',
    //   // alt: 'Image 4'
    // }, {
    //   image: '/assets/5-min.jpg',
    //   thumbImage: '/assets/5-min.jpg',
    //   // alt: 'Image 5'
    // }, {
    //   image: '/assets/6-min.jpg',
    //   thumbImage: '/assets/6-min.jpg',
    //   // title: 'Image 6',
    //   // alt: 'Image 6'
    // }
  ];

  sponser: Array<CampaignModel> = [
    // {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo1.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo2.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo3.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo4.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo5.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo6.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo7.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo1.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo2.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo3.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo4.png',
    // }, {
    //   link: 'https://www.facebook.com/',
    //   thumbImage: '/assets/logo5.png',
    // },
  ];


  ngOnInit(): void {
  }

  mapGalleryAndSponsor(res: any) {
    let imageArray: any = [];
    res.forEach((res: any) => {
      let data: any = {}
      data.image = res.image_url
      data.thumbImage = res.image_url
      data.link = res.url ? res.url : 'http://kajilla.com/'
      data.path = res.image_url
      imageArray.push(data)
    });
    return imageArray;
  }

  imageOnClick(index: number) {
    window.open(this.sponser[index].link, "_blank");
  }
}
