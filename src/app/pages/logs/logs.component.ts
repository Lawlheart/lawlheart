import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [PortfolioService]
})
export class LogsComponent implements OnInit {
  logs;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.logs = this.portfolioService.getLogs();
  }

}
