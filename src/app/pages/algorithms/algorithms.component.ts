import {Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterViewInit} from '@angular/core';
import { PortfolioService } from '../../services';

declare let hljs;

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss'],
  providers: [PortfolioService]
})
export class AlgorithmsComponent implements OnInit, AfterViewInit {
  snippets;
  @ViewChildren('code') snippetElements;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.snippets = this.portfolioService.getSnippets();
  }

  ngAfterViewInit(): void {
    this.snippetElements._results.forEach(el => hljs.highlightBlock(el.nativeElement));
  }

}
