import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'src/app/services/cookie.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('menu') menu;
  token: any;
  isLoggedIn = this.cookie.get('token') ? true : false
  login = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private cookie: CookieService, private http: HttpService) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn);

  }
  openMenu() {
    this.menu.nativeElement.style.transform = 'translateX(0)'
    this.menu.nativeElement.style.opacity = '1'
  }
  closeMenu() {
    this.menu.nativeElement.style.transform = 'translateX(100%)'
    this.menu.nativeElement.style.opacity = '0'
  }
  async onSubmit() {
    const formData: any = new FormData();
    formData.append("username", this.login.get("username").value);
    formData.append("password", this.login.get("password").value);

    this.token = await this.http.getLogin(formData).toPromise();
    this.token = this.token.access_token;
    console.log(this.token);
    if (this.token) {
      this.isLoggedIn = true;
      this.login.reset()

    }
    this.cookie.set('token', this.token);
  }
  logout() {
    this.cookie.delete('token')
    this.isLoggedIn = false;
  }

}
