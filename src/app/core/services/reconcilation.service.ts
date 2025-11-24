import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { Observable } from 'rxjs';
import { ReconciliationRequest, ReconciliationResult } from '../../shared/interfaces/reconciliation.interface';

@Injectable({
  providedIn: 'root',
})
export class ReconcilationService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/conciliacion`;
  executeReconciliation(data: ReconciliationRequest): Observable<ApiResponse<ReconciliationResult>> {
    return this.http.post<ApiResponse<ReconciliationResult>>(`${this.apiUrl}/ejecutar`, data);
  }
}
