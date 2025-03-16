import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  portfolios: any[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.loadPortfolios();
  }

  loadPortfolios(): void {
    this.portfolioService.getPortfolios().subscribe((data: any[]) => {
      this.portfolios = data;
    });
  }
}

