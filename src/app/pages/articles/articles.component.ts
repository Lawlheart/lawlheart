import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [PortfolioService]
})
export class ArticlesComponent implements OnInit {
  articles;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.articles = this.portfolioService.getLogs();
  }

}
