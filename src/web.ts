import { WebPlugin } from '@capacitor/core';

import type { CapacitorZplPrinterPlugin } from './definitions';

export class CapacitorZplPrinterWeb
  extends WebPlugin
  implements CapacitorZplPrinterPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
