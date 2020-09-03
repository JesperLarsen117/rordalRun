import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'src/app/services/cookie.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {
  @ViewChild('ratingBox') ratingBox;
  ratingBoxOpen = false;
  distanceData: any;
  runs: any;
  run: any;
  rating: any;
  rateFrom = this.fb.group({
    rating: []
  })
  constructor(private http: HttpService, private cookie: CookieService, private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    this.distanceData = await this.http.getPages().toPromise();
    this.distanceData = this.distanceData.items[1];
    this.runs = await this.http.getRunners().toPromise();
    this.runs = this.runs.items;

    console.log(this.runs);
    this.filterRuns(1)

    window.onclick = function (event) {
      const element = document.getElementsByClassName('rating-box')[0] as any;

      if (event.target.classList[0] !== element.classList[0]) {
        element.style.display = "none";
      }
    }

  }
  async filterRuns(run_id) {
    this.run = await this.http.getRunner(run_id).toPromise();
    this.run = this.run.item;
    console.log(this.run);
    const header = new HttpHeaders().set('Authorization', `Bearer ${this.cookie.get('token')}`);
    this.rating = await this.http.getAverageRating(this.run.id, header).toPromise();
    this.rating = (parseFloat(this.rating.average_num_stars)) ? parseFloat(this.rating.average_num_stars) * 20 : 0;
  }
  rate() {
    setTimeout(() => {
      this.ratingBox.nativeElement.style.display = 'block';

    }, 100);

  }
  postRate(run_id) {

    setTimeout(async () => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.cookie.get('token')}`);
      console.log(this.rateFrom.get("rating").value);

      const formData: any = new FormData();
      formData.append("run_id", run_id);
      formData.append("num_stars", this.rateFrom.get("rating").value);
      formData.append("comment", '');
      if (this.rateFrom.get("rating").value > 0) {
        console.log('post');
        const rateReturn = await this.http.postRating(formData, { headers }).toPromise();
        console.log(rateReturn);

      } else {
        const rateReturn = await this.http.deleteRating(run_id, { headers }).toPromise();
        console.log('delete');

      }
      this.run = await this.http.getRunner(run_id).toPromise();
      this.run = this.run.item;
      this.rating = await this.http.getAverageRating(this.run.id, headers).toPromise();
      this.rating = (parseFloat(this.rating.average_num_stars)) ? parseFloat(this.rating.average_num_stars) * 20 : 0;
      this.ratingBox.nativeElement.style.display = 'none';
      this.rateFrom.reset()

    }, 200);

  }
}
