import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END } from 'backend';
import { Observable } from 'rxjs';
import { Role } from 'src/app/shared/Models/role';
import { Privilege } from 'src/app/shared/Models/privilege';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRoles(){
    return this.httpClient.get(BACK_END+"roles") as Observable<Role[]>;
  }

  getPrivileges(){
    return this.httpClient.get(BACK_END+"privileges") as Observable<Privilege[]>;
  }
}
