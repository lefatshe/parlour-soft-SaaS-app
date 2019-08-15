import {EventEmitter, Injectable} from '@angular/core';
import {AuthErrorRes} from "../models/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthSharedService {
  public authErrorLogger: EventEmitter<any>;


  constructor() {
    this.authErrorLogger = new EventEmitter();
  }

  public authResponse(logger): void {
    this.authErrorLogger = logger
  }
}
