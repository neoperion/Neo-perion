import { productDevelopment } from './productDevelopment';
import { webDevelopment } from './webDevelopment';
import { mobileDevelopment } from './mobileDevelopment';
import { artificialIntelligence } from './artificialIntelligence';
import { advancedAI } from './advancedAI';
import { businessAutomation } from './businessAutomation';
import { startupSupport } from './startupSupport';
import { ServicePageConfig } from './types';

export const servicesConfigData: ServicePageConfig[] = [
  productDevelopment,
  webDevelopment,
  mobileDevelopment,
  artificialIntelligence,
  advancedAI,
  businessAutomation,
  startupSupport
];

export const getServiceConfig = (slug: string): ServicePageConfig | undefined => {
  return servicesConfigData.find(service => service.slug === slug);
};
