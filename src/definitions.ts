export interface CapacitorZplPrinterPlugin {
    /**
     * send ZPL code to a printer through an IP address and a port to be printed
     *
     * @param options
     * @returns returns a promise
     *
     */
    print(options: PrintOptions): Promise<any>

    /**
     *
     * @param options
     * @returns returns a promise
     *
     */
    echo(options: { value: string }): Promise<{ value: string }>;
}

export interface PrintOptions {
    /**
     * IP address where the printer is located
     */
    ip: string,
    /**
     * Port through which the printer is connected
     */
    port: number
    /**
     * ZPL code to be printed
     */
    zpl: string
    /**
     * Number of impressions, by default one is printed
     */
    prints?: number
}