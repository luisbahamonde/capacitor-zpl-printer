import { registerPlugin } from '@capacitor/core';

import type { CapacitorZplPrinterPlugin } from './definitions';

const CapacitorZplPrinter = registerPlugin<CapacitorZplPrinterPlugin>(
  'CapacitorZplPrinter',
  {
    web: () => import('./web').then(m => new m.CapacitorZplPrinterWeb()),
  },
);

export * from './definitions';
export { CapacitorZplPrinter };
