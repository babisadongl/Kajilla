import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    if(this.menu == true){
      this.menu = false;
    }
    else{
      this.menu = true;
    }
  }

}
