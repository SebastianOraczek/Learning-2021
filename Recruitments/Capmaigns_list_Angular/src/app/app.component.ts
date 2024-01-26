import { Component } from '@angular/core';
import { CampaignInterface } from './types/campaigns.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allCampaigns: CampaignInterface[] = [];
  isFormActive: boolean = false;

  // Setting allCampaigns from localStorage
  ngOnInit(): void {
    const campaigns = JSON.parse(window.localStorage.campaigns);
    if (campaigns) this.allCampaigns = [...campaigns];
  };

  // Toggle new form
  isFormActiveTrue() {
    this.isFormActive = true;
  };
  isFormActiveFalse() {
    this.isFormActive = false;
  };

  removeCampaign(id: string): void {
    this.allCampaigns = this.allCampaigns.filter(campaign => campaign.id !== id);
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns));
  };
};