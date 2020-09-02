import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class FrontpageComponent implements OnInit {
  pageContent: any;
  runData: any;
  distanceData: any;
  constructor(private http: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.pageContent = await this.http.getPages().toPromise();
    this.distanceData = this.pageContent.items[1];
    this.pageContent = this.pageContent.items[0];
    console.log(this.pageContent);

    this.runData = await this.http.getRunners().toPromise();
    this.runData = this.runData.items;

  }

}
