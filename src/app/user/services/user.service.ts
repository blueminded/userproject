import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from '../../models/data.model';
import { IResponse } from '../../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPerson(): Observable<IResponse> {
    return this.http.get<IResponse>(
      'https://gist.githubusercontent.com/kathcode/9a0b57a3caa34255f9c12b6204d6fe3d/raw/69aba7500957db06d3e2e1fe88a2ada7d163325f/getGreatPerson.json'
    );
  }
}
