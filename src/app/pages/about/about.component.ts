import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData: any;
  constructor(private http: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.aboutData = await this.http.getPage(1).toPromise();
    this.aboutData = this.aboutData.item;
    console.log(this.aboutData);

  }

}
