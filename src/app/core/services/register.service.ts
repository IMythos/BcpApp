import { HttpClient } from "@angular/common/http"
import { inject, Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { ClientRegister } from "../../shared/interfaces/register.interface";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/registro';

  register(request: ClientRegister): Observable<ClientRegister> {
    const registerUrl = `${this.url}/cliente`;

    return this.http.post<ClientRegister>(registerUrl, request);
  }
}
