import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CreditApplicationRequest, LoanResponse } from '../../shared/interfaces/loan.interface';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/prestamos`;
  requestLoan(request: CreditApplicationRequest): Observable<ApiResponse<LoanResponse>> {
    return this.http.post<ApiResponse<LoanResponse>>(`${this.apiUrl}/solicitar`, request);
  }
  getLoanById(id: number): Observable<ApiResponse<LoanResponse>> {
    return this.http.get<ApiResponse<LoanResponse>>(`${this.apiUrl}/${id}`);
  }
}
