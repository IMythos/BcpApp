import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ChangeRoleRequest, ClientDTO, EmployeeDTO } from '../../shared/interfaces/admin.interface';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/admin/usuarios`;
  createClient(clientData: ClientDTO): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/clientes`, clientData);
  }

  createEmployee(employeeData: EmployeeDTO): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/empleados`, employeeData);
  }

  changeEmployeeRole(request: ChangeRoleRequest): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/cambiar-rol`, request);
  }

  listEmployees(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.apiUrl}/empleados`);
  }
}
