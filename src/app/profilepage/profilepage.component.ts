import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-profilepage',
  imports: [CommonModule],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent implements OnInit {
  portfolios: any[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.loadPortfolios();
  }

  loadPortfolios(): void {
    this.portfolioService.getPortfolios().subscribe((data: any[]) => {
      this.portfolios = data.map(portfolio => {

        if (portfolio.skills) {
          portfolio.skillsArray = portfolio.skills.split(',');
        } else {
          portfolio.skillsArray = [];
        }

        // if (portfolio.projects) {
        //   portfolio.projectsArray = portfolio.projects.split(',');
        // } else {
        //   portfolio.projectsArray = [];
        // }

        return portfolio;
      });
    });
  }

}

