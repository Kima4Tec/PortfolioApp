import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  portfolios: any[] = [];
  portfolio: any = { // Initialiser en tom portfolio for oprettelse og redigering
    id: null,
    name: '',
    age: null,
    intro: '',
    skills: '',
    projects: '',
    experience: '',
    education: '',
    interest: ''
  };

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.loadPortfolios(); // Indlæs portfolios ved starten
  }

  // Hent alle portfolios
  loadPortfolios(): void {
    this.portfolioService.getPortfolios().subscribe((data) => {
      this.portfolios = data;
    });
  }

  // Opret en ny portfolio
  createPortfolio(): void {
    this.portfolioService.createPortfolio(this.portfolio).subscribe((newPortfolio) => {
      this.portfolios.push(newPortfolio); // Tilføj ny portfolio til listen
      this.resetPortfolio(); // Nulstil formularen
    });
  }

  // Opdater en portfolio
  updatePortfolio(): void {
    if (this.portfolio.id) {
      this.portfolioService.updatePortfolio(this.portfolio.id, this.portfolio).subscribe((updatedPortfolio) => {
        const index = this.portfolios.findIndex(p => p.id === updatedPortfolio.id);
        if (index !== -1) {
          this.portfolios[index] = updatedPortfolio; // Opdater portfolio i listen
        }
        this.resetPortfolio(); // Nulstil formularen
      });
    }
  }

  // Slet en portfolio
  deletePortfolio(id: number): void {
    this.portfolioService.deletePortfolio(id).subscribe(() => {
      this.portfolios = this.portfolios.filter(p => p.id !== id); // Fjern slettet portfolio fra listen
    });
  }

  // Nulstil formularen for oprettelse og redigering
  resetPortfolio(): void {
    this.portfolio = { id: null, name: '', age: null, intro: '', skills: '', projects: '', experience: '', education: '', interest: '' };
  }

  // Håndter redigering af en portfolio
  editPortfolio(portfolio: any): void {
    this.portfolio = { ...portfolio }; // Kopier den valgte portfolio til formularen
  }
}
