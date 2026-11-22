import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface loginRequest {
    username: string;
    password: string;
}

export interface loginResponse {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: string;
    scope: string;
}

export interface SignupRequest {
  email: string;
  username: string;
  password: string;
  role: string[];
}

export interface SignupResponse {
  email: string;
  username: string;
  password: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {  
    private readonly http = inject(HttpClient);
    private readonly router = inject(Router)

    private readonly backendUrl = environment.backendUrl
   
     login(request: loginRequest): Observable<loginResponse> {
    return this.http.post<loginResponse>(
     this.backendUrl+ `/auth/signin`,
      request,
      { withCredentials: true }
    );
  }

  startOAuth(): void {
    this.router.navigate(["/oauth"])
  }

  startSso(): void {
     this.router.navigate(["/saml"])
  }

  signup(request: SignupRequest): Observable<SignupResponse> {
  return this.http.post<SignupResponse>(
    `${this.backendUrl}/auth/signup`,
    request
  );
}

}