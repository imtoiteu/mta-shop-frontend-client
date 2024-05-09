import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  url = 'http://ec2-18-212-28-141.compute-1.amazonaws.com:8080/api/send-mail'

  constructor(private httpClient: HttpClient) { }

  sendMailOtp(email:String) {
    return this.httpClient.post(this.url+'/otp', email);
  }
}
