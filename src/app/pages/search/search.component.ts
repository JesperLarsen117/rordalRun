import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  reverseId = false;
  reverseName = false;
  reverseCity = false;

  participantsData: any;
  result: any;
  search = this.fb.group({
    keyword: ['', Validators.required]
  })
  constructor(private http: HttpService, private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    this.participantsData = await this.http.getPages().toPromise();
    this.participantsData = this.participantsData.items[4];
    console.log(this.participantsData);
  }
  async submit() {
    if (this.search.get('keyword').value) {
      this.result = await this.http.getSearchResult(this.search.get('keyword').value).toPromise();
      this.result = this.result.items

    } else {
      this.result = [{ id: 'Ingen resultat' }]
    }
    console.log(this.result);
  }

  sortId() {
    this.reverseId ? this.result.sort((a, b) => a.id - b.id) : this.result.sort((a, b) => b.id - a.id);
    this.reverseId = this.reverseId ? false : true
  }
  sortNames() {
    this.reverseName ? this.result.sort((a, b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0)) : this.result.sort((a, b) => (b.firstname > a.firstname) ? 1 : ((a.firstname > b.firstname) ? -1 : 0))
    this.reverseName = this.reverseName ? false : true
  }
  sortCities() {
    this.reverseCity ? this.result.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0)) : this.result.sort((a, b) => (b.city > a.city) ? 1 : ((a.city > b.city) ? -1 : 0))
    this.reverseCity = this.reverseCity ? false : true

  }
}
