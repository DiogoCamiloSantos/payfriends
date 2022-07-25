import { Injectable } from "@angular/core";
import { Payment } from "../../domain/payment/payment";
import { PaymentRepository } from "../../repository/payment/payments.repository";

@Injectable()
export class PaymentService {
    constructor(
        private paymentRepository: PaymentRepository
    ) { }

    async getAll(): Promise<Payment[]> {
        try {
            return await this.paymentRepository.get();
        } catch (error) {
            console.error(error);
            throw new Error(`Payment service is not available!`);
        }
    }
}