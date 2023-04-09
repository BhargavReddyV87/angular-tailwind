import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() headerDetails: any;

  constructor() { }

  ngOnInit(): void {
    console.log('headerDetails', this.headerDetails)
  }

}
