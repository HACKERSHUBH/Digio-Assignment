import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss']
})
export class LoginContentComponent implements OnInit {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  submit(comp: string): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate([`${comp}`],{ relativeTo: this.route ,state: { mail: 'Shubham'}});
    }
  }
}
