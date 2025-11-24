import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { Observable } from 'rxjs';
import { AuditLogDTO, AuditRoleDTO } from '../../shared/interfaces/audit.interface';

@Injectable({
  providedIn: 'root',
})
export class AuditService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/reclamos`;
  getFinancialAuditLogs(): Observable<ApiResponse<AuditLogDTO[]>> {
    return this.http.get<ApiResponse<AuditLogDTO[]>>(`${this.apiUrl}/financiera`);
  }

  getRoleAuditLogs(): Observable<ApiResponse<AuditRoleDTO[]>> {
    return this.http.get<ApiResponse<AuditRoleDTO[]>>(`${this.apiUrl}/roles`);
  }
}
