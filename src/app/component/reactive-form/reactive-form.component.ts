import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl('')
  // });  //formGroup-Control
  public formData = this.fb.group({
    name: ['', Validators.required],
  }); //FormBuilder

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public submitForm() {
    console.log('smForm', this.formData.value)
  }
}
