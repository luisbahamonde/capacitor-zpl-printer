export interface CapacitorZplPrinterPlugin {
    /**
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
     *
     */
    ip: string,
    /**
     *
     */
    port: number
    /**
     *
     */
    zpl: string
    /**
     *
     */
    prints?: number
}