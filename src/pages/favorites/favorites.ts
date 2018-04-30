import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {QuoteService} from "../../service/quote/quote.service";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public quoteService: QuoteService, public modalCtrl: ModalController) {
  }

  ionViewWillEnter(): void {
    this.quotes = this.quoteService.getFavouriteQuotes();
  }

  onQuoteView(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }

}
