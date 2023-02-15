import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorZplPrinterPlugin)
public class CapacitorZplPrinterPlugin: CAPPlugin {
    private let implementation = CapacitorZplPrinter()

    @objc func echo(_ call: CAPPluginCall) {
            let value = call.getString("value") ?? ""
            call.resolve([
                "value": implementation.echo(value)
            ])
        }

    @objc func print(_ call: CAPPluginCall) {
        let ip = call.getString("ip") ?? ""
        let port = call.getInt("port", 9100)
        let zpl = call.getString("zpl") ?? ""
        let prints = call.getInt("prints", 1)
        
        
        call.resolve()
    }
}
