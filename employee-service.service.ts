import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return [
      { "id": 1, "name": "Giftson", "age": 24 },
      { "id": 2, "name": "King", "age": 22 },
      { "id": 3, "name": "James", "age": 24 },
      { "id": 4, "name": "Francina", "age": 2 },
    ]
  }
}
