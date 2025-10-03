export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
}

export type SponsorTier = "platinum" | "gold" | "silver" | "bronze";
