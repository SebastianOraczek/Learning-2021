export interface CampaignInterface {
    id: string,
    name: string,
    town: string,
    campaignFund: number;
    bidAmount: number;
    radius: number;
    status: boolean;
    keywords: string;
}