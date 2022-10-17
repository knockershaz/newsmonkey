import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Setra",
            "title": "Une startup française réinvente l’eau chaude grâce au Bitcoin",
            "description": "La startup Tresorio propose un chauffe-eau d’appoint qui utilise des puces de minage de Bitcoin (permettant à l’utilisateur de gagner des crypto) à la place des résistances électriques.",
            "url": "https://www.presse-citron.net/une-startup-francaise-reinvente-leau-chaude-grace-au-bitcoin/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2022/09/douche-chien-bain.jpg",
            "publishedAt": "2022-09-30T10:00:34Z",
            "content": "Si vous suivez régulièrement lactualité des startups françaises, vous avez peut-être déjà entendu parler de Tresorio. Cette entreprise, basée à Metz, fournit un des services cloud. Mais elle se disti… [+3185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "RPB",
            "title": "McDonald’s se met à accepter le Bitcoin, combien coûte un Big Mac ?",
            "description": "McDonald's acceptait déjà les Bitcoin au Salvador qui en ont fait leur devise nationale. La chaîne annonce désormais qu'un McDo Suisse propose désormais aussi de payer en crypto.",
            "url": "https://www.presse-citron.net/mcdonalds-se-met-a-accepter-le-bitcoin-combien-coute-un-big-mac/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2021/12/Mc-Donalds-fast-food.jpg",
            "publishedAt": "2022-10-05T11:59:22Z",
            "content": "En septembre 2021, McDonald’s, comme de nombreuses autres entreprises américaines implantées au Salvador (notamment Starbucks ou encore Pizza Hut), a commencé à accepter les Bitcoin dans le pays. Ce … [+2576 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Faz.net"
            },
            "author": "Martin Hock",
            "title": "Schwankende Kurse: Bitcoin auf neuem Tiefstand",
            "description": "Der Bitcoin kostet derzeit so viel wie im Dezember 2020, auch andere Kryptoanlagen verloren zuletzt an Wert. Hintergrund sind die Ankündigungen großer Notenbanken, die Zinsen erhöhen zu wollen.",
            "url": "https://www.faz.net/aktuell/finanzen/digital-bezahlen/bitcoin-auf-neuem-tiefstand-kurse-von-kryptowaehrungen-schwanken-18326975.html",
            "urlToImage": "https://media1.faz.net/ppmedia/aktuell/finanzen/801866326/1.8326997/facebook_teaser/kein-bitcoin-die-kryptoanlage.jpg",
            "publishedAt": "2022-09-19T09:50:29Z",
            "content": "Das Schwanken von Bitcoin um die Marke von 20.000 Dollar geht weiter. Am Montagmorgen fiel der Kurs der ältesten und nach wie vor größten Kryptoanlage bis auf 18.322 Dollar und erholte sich seitdem n… [+4468 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gkay@insider.com (Grace Kay)",
            "title": "What Elon Musk has said publicly — and in private texts — about X, his idea for an 'everything app'",
            "description": "Elon Musk has dropped several hints regarding his plans to shake up the social media world. Here's everything we know about his plans for \"X.\"",
            "url": "https://www.businessinsider.com/elon-musk-x-everything-app-twitter-details-2022-10",
            "urlToImage": "https://i.insider.com/633e25d6b3e94d001977d0d9?width=1200&format=jpeg",
            "publishedAt": "2022-10-15T11:05:00Z",
            "content": "If Elon Musk's deal to buy Twitter closes, the billionaire will have taken the first step toward something he calls \"X,\" his vision for a new kind of social media platform that most in the US haven't… [+6030 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "StockNews.com"
            },
            "author": "Santanu Roy",
            "title": "3 Blockchain Stocks to Sell Before They Lose Even More Ground",
            "description": "Despite blockchain's massive potential due to its decentralized nature and wide-ranging application, the macroeconomic headwinds have kept blockchain stocks under pressure along with other technology stocks. Furthermore, blockchain's near-term prospects...",
            "url": "https://stocknews.com/news/sq-mara-riot-3-blockchain-stocks-to-sell-before-they-lose-even-more/",
            "urlToImage": "https://assets.entrepreneur.com/providers/stocknews/hero-image-stocknews-436484.jpeg",
            "publishedAt": "2022-10-03T13:57:00Z",
            "content": "Despite blockchain's massive potential due to its decentralized nature and wide-ranging application, the macroeconomic headwinds have kept blockchain stocks under pressure along with other technology… [+8160 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmohamed@businessinsider.com (Theron Mohamed)",
            "title": "Billionaire investor John Paulson warns US house prices could tumble - and touts gold as an inflation hedge",
            "description": "Paulson, whose fund made $15 billion shorting the mid-2000s housing bubble, said current home prices might be a \"little frothy.\"",
            "url": "https://markets.businessinsider.com/news/stocks/john-paulson-short-selling-house-prices-market-gold-inflation-hedge-2022-9",
            "urlToImage": "https://i.insider.com/6331bfab329bac00182f3159?width=1200&format=jpeg",
            "publishedAt": "2022-09-26T15:27:07Z",
            "content": "John Paulson, who called the implosion of the mid-2000s housing bubble, warned US home prices could slump again, but ruled out the decline sparking another financial crisis.\r\n\"We're not at risk of a … [+2531 chars]"
        }
    ]
    constructor(){
        super();
        console.log("this is a constrructor");
        this.state={
            article:this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <div className="row">
            {this.state.article.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0,40)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} url={element.url}/>
            </div>
            })}
           
        </div>
      </div>
    )
  }
}

export default News
