import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {
  results: any;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getLiked();
  }

  getLiked(): void {
    this.results = JSON.parse(this.cookieService.get('liked_songs'));
  }

  playPreview(result): void {
    const audio = new Audio();
    audio.src = result.previews['preview-lq-ogg'];
    audio.load();
    audio.play().then(() => audio.pause());
  }

  clearCookies(): void {
    this.cookieService.set('liked_songs', '');
    // this does a hard reload
    window.location.reload();
  }
}
