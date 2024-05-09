import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from '../common/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url = 'http://ec2-18-212-28-141.compute-1.amazonaws.com:8080/api/notification';

  constructor(private http: HttpClient) { }

  post(notification: Notification) {
    return this.http.post(this.url, notification);
  }
}
