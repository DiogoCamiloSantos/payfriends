import { RemoteGatewayFactory } from "../../gateway/remote-gateway-factory";
import { BackendUrl } from "../../gateway/config/url/back-end.url";
import { ContentTypeJsonHeader } from "../../gateway/config/header/default-header.type";
import { PaymentParser } from "../../parser/payment/payment.parser";
import { Injectable } from "@angular/core";
import { Payment } from "../../domain/payment/payment";

@Injectable()
export class PaymentRepository {
    constructor(
        private remoteGatewayFactory: RemoteGatewayFactory,
        private paymentParser: PaymentParser
    ) {}

    async get(): Promise<Payment[]> {
        const request = this.remoteGatewayFactory.createDefaultRemoteGateway();
        const response = await request.getWithHeaders(new BackendUrl('tasks'), ContentTypeJsonHeader);

        const data = this.paymentParser.parseList(response);

        return data;
    }
}
