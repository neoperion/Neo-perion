export interface FritadoConfig {
  status: "private-preview" | "pilot" | "coming-soon" | "live";
  statusBadge: string;
  primaryLabel: string;
  primaryUrl: string;
  trialUrl: string;
  officialUrl: string;
  demoUrl: string;
  showTrialClaim: boolean;
  trialDuration: string;
  noCreditCard: boolean;
  productOwner: string;
  supportOwner: string;
  securityScope: string;
  proofState: "product-demonstration" | "verified-metrics";
  lastReviewed: string;
  trialMicrocopy: string;
}

export const fritadoConfig: FritadoConfig = {
  status: "private-preview",
  statusBadge: "AN AINCURU PRODUCT · PRIVATE PREVIEW",
  primaryLabel: "START 7-DAY FREE TRIAL",
  // Single approved destination link provided explicitly by user
  primaryUrl: "https://platform.fritado.com/register?ref=S9988",
  trialUrl: "https://platform.fritado.com/register?ref=S9988",
  officialUrl: "https://platform.fritado.com/register?ref=S9988",
  demoUrl: "https://platform.fritado.com/register?ref=S9988",
  showTrialClaim: true,
  trialDuration: "7-day",
  noCreditCard: true,
  productOwner: "AINCURU Product Engineering",
  supportOwner: "AINCURU Support",
  securityScope: "Granular role-based access, tenant data isolation, and human-in-the-loop approval boundaries",
  proofState: "product-demonstration",
  lastReviewed: "2026-09-17",
  trialMicrocopy: "7-day free trial · No credit card required",
};
