import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Book, FlipbookService, PageType } from '@labsforge/flipbook';
import { CampaignModel } from 'src/app/models/campaignModel';

@Component({
  selector: 'app-magazine-pdf',
  templateUrl: './magazine-pdf.component.html',
  styleUrls: ['./magazine-pdf.component.scss']
})
export class MagazinePdfComponent implements OnInit {

  constructor() { }

  @Input() public bannerImages: any;

  public imagesForSlider: Array<any> = [
    // { path: '/assets/3.jpg' },
    // { path: '/assets/7-min.jpg' },
    // { path: '/assets/1 (1).jpg' },
    // { path: '/assets/2.jpg' },
    // { path: '/assets/4.jpg' },
  ];

  book: Book = {
    width: 750,
    height: 500,
    zoom: 1,
    cover: {
      front: {
        imageUrl: '/assets/tvm-4.jpg',
      },
      back: {
        imageUrl: '/assets/tvm-5.jpg',
      }
    },
    pages: [
      {
        imageUrl: '/assets/tvm-6.jpg',
        backgroundColor: '#41473A',
      },
      {
        imageUrl: '/assets/1111.jpg',
      },
      {
        imageUrl: '/assets/final.jpg',
      },
      {
        imageUrl: '/assets/ai.jpg',
      },
      {
        imageUrl: '/assets/1.jpg',
      },
      {
        imageUrl: '/assets/2.jpg',
      },
      {
        imageUrl: '/assets/tvm-2.jpg',
      },
      {
        imageUrl: '/assets/tvm-3.jpg',
      },
      {
        imageUrl: '/assets/1.jpg',
      },
      {
        imageUrl: '/assets/2.jpg',
        backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
      }
    ],
    startPageType: PageType.Double,
    endPageType: PageType.Double
  }

  ngOnInit(): void {
    if (this.bannerImages) {
      this.bannerImages.forEach((image: CampaignModel) => {
        let data: any = {};
        data.path = image.image
        this.imagesForSlider.push(data)
      });
    }
  }

  zoomIn() {
    this.book.zoom = this.book.zoom + 1;
  }

  zoomOut() {
    if (this.book.zoom > 1) {
      this.book.zoom = this.book.zoom - 1;
    }
  }
}
