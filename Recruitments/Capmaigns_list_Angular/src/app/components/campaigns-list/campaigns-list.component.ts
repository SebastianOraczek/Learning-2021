import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CampaignInterface } from 'src/app/types/campaigns.interface';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent {
  @Input() allCampaigns: CampaignInterface[] = [];
  @Output() removeCampaign = new EventEmitter();
  @Output() isFormActiveTrue = new EventEmitter();
  @Output() handleEdit = new EventEmitter();

  editForm: boolean = false;

  // Initial data fot edit form component
  id: string = "";
  editedName: string = "";
  editedTown: string = "";
  editedCampaignFund: number = 0;
  editedBidAmount: number = 0;
  editedRadius: number = 0;
  editedStatus: boolean = false;
  editedKeywords: string = "";

  // Setting data from an individual campaign
  editFormTrue(id): void {
    this.allCampaigns.map(campaign => {
      if (campaign.id === id) {
        this.id = campaign.id
        this.editedName = campaign.name;
        this.editedTown = campaign.town;
        this.editedCampaignFund = campaign.campaignFund;
        this.editedBidAmount = campaign.bidAmount;
        this.editedRadius = campaign.radius;
        this.editedStatus = campaign.status;
        this.editedKeywords = campaign.keywords;
      };
    });
    this.editForm = true;
  };

  editFormFalse(): void {
    this.editForm = false;
  };
};