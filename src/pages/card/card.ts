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
    <ion-item></ion-item>
    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Name</ion-label>
        <ion-input type="text" formControlName="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Card Number</ion-label>
        <ion-input type="text" formControlName="description"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Expiration Date</ion-label>
        <ion-input type="number" formControlName="number"></ion-input>
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
