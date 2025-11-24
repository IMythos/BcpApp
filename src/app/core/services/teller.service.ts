import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CashierDeposit, WindowPayment, WindowWithdrawal } from '../../shared/interfaces/teller.interface';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class TellerService {
   private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/ventanilla`;

  deposit(data: CashierDeposit): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/deposito`, data);
  }

  withdraw(data: WindowWithdrawal): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/retiro`, data);
  }

  payService(data: WindowPayment): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/pago`, data);
  }
}
