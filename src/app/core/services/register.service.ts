import { HttpClient } from "@angular/common/http"
import { inject, Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { ClientRegister } from "../../shared/interfaces/register.interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private http = inject(HttpClient);
  url = environment.apiURL;
  private apiUrl = `${this.url}/api/registro`;

  register(request: ClientRegister): Observable<ClientRegister> {
    const registerUrl = `${this.apiUrl}/cliente`;

    return this.http.post<ClientRegister>(registerUrl, request);
  }
}
