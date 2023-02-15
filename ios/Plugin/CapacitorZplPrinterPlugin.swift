import Foundation
import Capacitor
import SwiftSocket;

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
        let port = Int32(call.getInt("port", 9100))
        let zpl = call.getString("zpl") ?? ""
        let prints = call.getInt("prints") ?? 1
        
        let client = TCPClient(address: ip, port: port)
        
        let resul = client.connect(timeout: 10)
        let print = client.send(string: zpl)
        
        //client.close();
        
        if(print.isSuccess){
            call.resolve()
        }
        
        if(print.isFailure){
            call.reject("error en la impresion")
        }
        
        call.resolve()
    }
}
