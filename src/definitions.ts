export interface CapacitorZplPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
