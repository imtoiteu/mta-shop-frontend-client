import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  url = 'http://ec2-3-82-6-253.compute-1.amazonaws.com:8080/api/send-mail'

  constructor(private httpClient: HttpClient) { }

  sendMailOtp(email:String) {
    return this.httpClient.post(this.url+'/otp', email);
  }
}
