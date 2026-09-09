import React from 'react';
import { MobileShell } from '../Navigation/MobileShell';
import { IndustriesPage } from '@/pages/IndustriesPage';

export function MobileIndustries() {
  return (
    <MobileShell nav="bottom" showFooter={false}>
      <IndustriesPage />
    </MobileShell>
  );
}

export default MobileIndustries;
