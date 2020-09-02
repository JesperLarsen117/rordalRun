import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-run-sign-up',
  templateUrl: './run-sign-up.component.html',
  styleUrls: ['./run-sign-up.component.scss']
})
export class RunSignUpComponent implements OnInit {
  signUpData: any;
  signUp = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    day: [null, Validators.required],
    month: [null, Validators.required],
    year: [null, Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    zipcode: ['', Validators.required],
    city: ['', Validators.required],
    phone: ['', Validators.required],
    program: [null, Validators.required],
    comment: ['']
  })
  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.signUpData = await this.http.getPages().toPromise();
    this.signUpData = this.signUpData.items[2];
    console.log(this.signUpData);

  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  onSubmit() {
    const formData: any = new FormData();
    const day = (this.signUp.get("day").value <= 9) ? '0' + this.signUp.get("day").value : this.signUp.get("day").value
    const month = (this.signUp.get("month").value <= 9) ? '0' + this.signUp.get("month").value : this.signUp.get("month").value
    const date = month + day + this.signUp.get("year").value;
    console.log(new Date(date));


    formData.append("run_id", this.signUp.get("program").value);
    formData.append("firstname", this.signUp.get("firstname").value);
    formData.append("lastname", this.signUp.get("lastname").value);
    formData.append("address", this.signUp.get("address").value);
    formData.append("zipcode", this.signUp.get("zipcode").value);
    formData.append("city", this.signUp.get("city").value);
    formData.append("email", this.signUp.get("email").value);
    formData.append("phone", this.signUp.get("phone").value);
    formData.append("birthdate", date);
    formData.append("gender", this.signUp.get("gender").value);
    formData.append("comment", this.signUp.get("comment").value);

    this.http.postRegistration(formData).subscribe((res: any) => {
      console.log(res);
      if (this.signUp.valid) {
        if (res.status === true) {
          console.log(res.status);
          this.router.navigateByUrl('tilmelding/tak');
        }
      }
    });
  }
}
