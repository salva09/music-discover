import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-discover';

  constructor() {
    let query = 'piano';
    query = query.concat(`&token=DTkKJVf5GktLFuU8I21pyUzqlEdn2pPaTY1f7kck`);

    this.httpGetAsync(
      `https://freesound.org/apiv2/search/text/?query=${query}`,
      (res) => {
        console.log(res);
    });
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
