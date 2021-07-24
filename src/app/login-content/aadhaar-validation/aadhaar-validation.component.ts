import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-aadhaar-validation',
  templateUrl: './aadhaar-validation.component.html',
  styleUrls: ['./aadhaar-validation.component.scss']
})
export class AadhaarValidationComponent implements OnInit {
  openModal = false;
  showalert = false;
  aadhaarValidationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.aadhaarValidationForm = new FormGroup({
      aadhaarNumber: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.pattern(/^\d{4}\s\d{4}\s\d{4}$/)
      ]),
      otp: new FormControl({ value: '', disabled: false },
        [
          Validators.required,
          Validators.pattern(/^\d{6}$/)
        ]
      ),
    });
  }

  aadharValidation() {
    this.openModal = true;
  }
  submitAadhaar() {
    this.openModal = false;
    this.showalert = true;
    this.aadhaarValidationForm.reset();
    this.autoCloseAlert();
  }

  autoCloseAlert() {
    timer(3000).subscribe(() => {
      this.showalert = false;
    });
  }
}
