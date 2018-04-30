import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuoteService} from "../../service/quote/quote.service";


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add it to favorite?',
      buttons: [
        {
          text: 'Add Quote',
          handler: () => {
            console.log("Add quote");
            this.quoteService.addQuote(quote);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancel");
          }
        }
      ]
    });

    alert.present();
  }

}
