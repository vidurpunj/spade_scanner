import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  video_name: any;
  constructor(
    private router: Router,
    private navControl: NavController) { }

  ngOnInit() {
  }

  openDetailsWithQueryParams(video_name: string){
    this.navControl.navigateForward(['play_video'])
  }
}
