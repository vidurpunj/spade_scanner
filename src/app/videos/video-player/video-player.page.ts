import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {
  video_name: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navControl: NavController) {
   }

  ngOnInit() {

}
}
