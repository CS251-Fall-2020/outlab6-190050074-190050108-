import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  feedbackForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      feedback: new FormControl(),
      comments: new FormControl()
    });

  }

  onSubmit(): void {
    console.log(this.feedbackForm.value);

  }

}