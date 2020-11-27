import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  results: any;
  searchFor = '';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    let query = this.searchFor.concat('&fields=name,previews');
    query = query.concat(`&token=DTkKJVf5GktLFuU8I21pyUzqlEdn2pPaTY1f7kck`);

    this.httpGetAsync(
      `https://freesound.org/apiv2/search/text/?query=${query}`,
      (res) => {
        const json = JSON.parse(res);
        this.results = json.results;
      });
  }

  searchSongs(Sound: HTMLInputElement): boolean {
    this.searchFor = Sound.value;
    this.ngOnInit();
    Sound.value = '';
    return false;
  }

  playPreview(result): void {
    const audio = new Audio();
    audio.src = result.previews['preview-lq-ogg'];
    audio.load();
    audio.play().then(() => audio.pause());
  }

  saveLiked(result): void {
    // this.cookieService.set('liked_songs', ''); // Use this to clear the cookies
    const cookie = this.cookieService.get('liked_songs');
    let cookieList;

    if (cookie === '') {
      cookieList = [];
    } else {
      cookieList = JSON.parse(this.cookieService.get('liked_songs'));
    }
    cookieList.push(result);

    this.cookieService.set('liked_songs', JSON.stringify(cookieList));
  }

  httpGetAsync(theUrl, callback): void {
    const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        callback(xmlHttp.responseText);
      }
    };
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send(null);
  }
}
