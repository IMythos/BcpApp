import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { PendingPaymentDTO } from '../../shared/interfaces/payment.interface';
import { ReceiptDTO } from '../../shared/interfaces/receipt.interface';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/pagos`;
  getPendingPayments(dni: string): Observable<ApiResponse<PendingPaymentDTO[]>> {
    return this.http.get<ApiResponse<PendingPaymentDTO[]>>(
      `${this.apiUrl}/pendientes/usuario/${dni}`
    );
  }
  processPayment(request: PaymentRequest): Observable<ApiResponse<ReceiptDTO>> {
    return this.http.post<ApiResponse<ReceiptDTO>>(`${this.apiUrl}/realizar`, request);
  }
}
