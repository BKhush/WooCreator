import { Component } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
@Component({
    selector: 'page-card',
    templateUrl: 'card.html',
    template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Payment</ion-title>
  </ion-navbar>
</ion-header>

    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Todo</ion-label>
        <ion-input type="text" formControlName="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea formControlName="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
    </form>
  `,
})
export class CardPage {
    todo;
    constructor(private formBuilder: FormBuilder) {
        this.todo = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
        });
    }
    logForm() {
        console.log(this.todo.value);
    }
}

export class Card {
}


//export class FormsPage {
    /*
    constructor(private formBuilder: FormBuilder) {
        this.todo = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
        });
    }
    logForm() {
        console.log(this.todo.value)
    } */
//}
