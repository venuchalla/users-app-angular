import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface loginRequest {
    email: string;
    password: string;
}

export interface loginResponse {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: string;
    scope: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {  
    private readonly http = inject(HttpClient);
   
     login(request: loginRequest): Observable<loginResponse> {
    return this.http.post<loginResponse>(
      `/api/auth/login`,
      request,
      { withCredentials: true }
    );
  }

  startOAuth(): void {
    window.location.assign(
      `/oauth2/authorization/google`
    );
  }

  startSso(): void {
    window.location.assign(
      `/saml2/authenticate/zitadel`
    );
  }

}