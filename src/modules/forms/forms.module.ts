import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,BrowserModule,ReactiveFormsModule
  ],
  exports: [
    CommonModule,BrowserModule,ReactiveFormsModule
  ]
})
export class FormsModule { }
