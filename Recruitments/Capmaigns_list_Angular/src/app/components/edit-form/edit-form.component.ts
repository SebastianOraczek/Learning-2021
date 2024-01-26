import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CampaignInterface } from 'src/app/types/campaigns.interface';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
})
export class EditFormComponent {
  @Output() editFormFalse = new EventEmitter();
  @Input() allCampaigns: CampaignInterface[] = [];
  @Input() id;
  @Input() editedName;
  @Input() editedTown;
  @Input() editedCampaignFund;
  @Input() editedBidAmount;
  @Input() editedRadius;
  @Input() editedStatus;
  @Input() editedKeywords;

  // Setting data from inputs
  changeName(event: any) {
    this.editedName = event.target.value;
  };
  changeTown(event: any) {
    this.editedTown = event.target.value;
  };
  changeCampaignFund(event: any) {
    this.editedCampaignFund = parseInt(event.target.value);
  };
  changeBidAmount(event: any) {
    this.editedBidAmount = parseInt(event.target.value);
  };
  changeRadius(event: any) {
    this.editedRadius = parseInt(event.target.value);
  };
  changeStatus() {
    this.editedStatus = !this.editedStatus;
  };
  changeKeywords(event: any) {
    this.editedKeywords = event.target.value;
  };

  handleEdit(id): void {
    this.allCampaigns.map(campaign => {
      if (campaign.id === id) {
        campaign.name = this.editedName;
        campaign.town = this.editedTown;
        campaign.campaignFund = this.editedCampaignFund;
        campaign.bidAmount = this.editedBidAmount;
        campaign.radius = this.editedRadius;
        campaign.status = this.editedStatus;
        campaign.keywords = this.editedKeywords;
      } else campaign;
    });
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns));
    this.editFormFalse.emit();
  };
};