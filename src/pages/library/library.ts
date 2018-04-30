import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import quote from "../../data/quotes"
import {QuotesPage} from "../quotes/quotes";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotes = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.quoteCollection = quote;
  }

}
