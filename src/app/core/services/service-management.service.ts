import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CreateServiceRequest, EditServiceRequest, ServiceResponse } from '../../shared/interfaces/service.interface';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceManagementService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/servicios`;
  createService(data: CreateServiceRequest): Observable<ApiResponse<ServiceResponse>> {
    return this.http.post<ApiResponse<ServiceResponse>>(this.apiUrl, data);
  }

  updateService(id: number, data: EditServiceRequest): Observable<ApiResponse<ServiceResponse>> {
    return this.http.put<ApiResponse<ServiceResponse>>(`${this.apiUrl}/${id}`, data);
  }

  deleteService(id: number): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${this.apiUrl}/${id}`);
  }

  getServiceById(id: number): Observable<ApiResponse<ServiceResponse>> {
    return this.http.get<ApiResponse<ServiceResponse>>(`${this.apiUrl}/${id}`);
  }
}
