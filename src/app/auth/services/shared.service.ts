import {EventEmitter, Injectable} from '@angular/core';
import {AuthErrorRes} from "../models/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthSharedService {
  public authErrorMsg: EventEmitter<any>;
  public regErrorMsg: EventEmitter<any>;


  constructor() {
    this.authErrorMsg = new EventEmitter();
    this.regErrorMsg = new EventEmitter();
  }

  public authResponse(logger): void {
    this.authErrorMsg = logger.message
  }
  public regResponse(logger) {
    console.log('regError', logger)
    this.regErrorMsg = logger
  }
}
