import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AccountDetailDTO, AccountDTO } from '../../shared/interfaces/account.interface';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { Observable } from 'rxjs';
import { TransferRequest } from '../../shared/interfaces/transfer.interface';
import { ReceiptDTO } from '../../shared/interfaces/receipt.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/cuentas`
  getAccountsByDni(dni: string): Observable<ApiResponse<AccountDTO[]>> {
    return this.http.get<ApiResponse<AccountDTO[]>>(`${this.apiUrl}/cliente/${dni}/listar`);
  }
  getAccountDetail(cuentaId: number): Observable<ApiResponse<AccountDetailDTO>> {
    return this.http.get<ApiResponse<AccountDetailDTO>>(`${this.apiUrl}/${cuentaId}`);
  }
  initiateTransfer(originAccountId: number, request: TransferRequest): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/${originAccountId}/transferir`, request);
  }
  confirmTransfer(dni: string, otpCode: string): Observable<ApiResponse<ReceiptDTO>> {
    const params = new HttpParams()
      .set('dni', dni)
      .set('codigoOTP', otpCode);

    return this.http.post<ApiResponse<ReceiptDTO>>(`${this.apiUrl}/confirmar-transferencia`, null, { params });
  }
  createAccount(dni: string, accountData: AccountDTO): Observable<ApiResponse<AccountDTO>> {
    return this.http.post<ApiResponse<AccountDTO>>(`${this.apiUrl}/usuario/${dni}/crear`, accountData);
  }
}
