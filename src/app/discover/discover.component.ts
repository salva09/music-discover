import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  results: any;

  constructor() {
  }

  ngOnInit(): void {
    let query = 'alarm&fields=name,previews';
    query = query.concat(`&token=DTkKJVf5GktLFuU8I21pyUzqlEdn2pPaTY1f7kck`);

    this.httpGetAsync(
      `https://freesound.org/apiv2/search/text/?query=${query}`,
      (res) => {
        const json = JSON.parse(res);

        this.results = json.results;
        console.log(this.results);
      });
  }

  playPreview(result): void {
    const audio = new Audio();
    audio.src = result.previews['preview-lq-ogg'];
    audio.load();
    audio.play().then(r => audio.pause());
  }

  httpGetAsync(theUrl, callback): void {
    const xmlHttp: XMLHttpRequest = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        callback(xmlHttp.responseText);
      }
    };
    xmlHttp.open('GET', theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  }
}
