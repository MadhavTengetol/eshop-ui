import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userid: any
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)

      ])

    });
  }
  onLoginSubmit() {
    if (this.loginForm.invalid) {
      alert('Please Enter Correct Information')
    }

    // const loginDetails : LoginDetails ={
    //   email: this.loginForm.value.email,
    //   password : this.loginForm.value.password
    // }
    const email = this.loginForm.value.email;
    console.log("Email : " + email);


    this.productService.getLogin(email).subscribe((result: any) => {
      console.log(result);

      localStorage.setItem('token', result.token);
    });

    // this.userid = localStorage.getItem('userid');
  }

  ngOnInit(): void {
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

}
