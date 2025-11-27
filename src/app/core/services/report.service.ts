import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/reportes`;

  downloadDailyReport(fecha: string, usuarioId: number): Observable<Blob> {
    const params = new HttpParams()
      .set('fecha', fecha)
      .set('usuarioId', usuarioId.toString());

    return this.http.get(`${this.apiUrl}/diario/descargar`, {
      params,
      responseType: 'blob'
    });
  }
  downloadGlobalReport(fecha: string): Observable<Blob> {
    const params = new HttpParams().set('fecha', fecha);

    return this.http.get(`${this.apiUrl}/global/descargar`, {
      params,
      responseType: 'blob'
    });
  }
}
