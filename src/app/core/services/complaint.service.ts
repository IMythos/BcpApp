import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ComplaintResponse, CreateComplainRequest } from '../../shared/interfaces/complaint.interface';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/reclamos`;
  createComplaint(request: CreateComplainRequest): Observable<ApiResponse<ComplaintResponse>> {
    return this.http.post<ApiResponse<ComplaintResponse>>(this.apiUrl, request);
  }
  getComplaintsByClient(clienteId: number): Observable<ApiResponse<ComplaintResponse[]>> {
    return this.http.get<ApiResponse<ComplaintResponse[]>>(`${this.apiUrl}/cliente/${clienteId}`);
  }
  getComplaintById(id: number): Observable<ApiResponse<ComplaintResponse>> {
    return this.http.get<ApiResponse<ComplaintResponse>>(`${this.apiUrl}/${id}`);
  }
}
