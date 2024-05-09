import { Injectable } from '@angular/core';
import { ChatMessage } from '../common/ChatMessage';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  chatMessages: ChatMessage[] = [];

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://ec2-3-82-6-253.compute-1.amazonaws.com:8080/notification');

    this.webSocket.onopen = (event) => {
      // console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      // console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessage: ChatMessage){
    this.webSocket.send(JSON.stringify(chatMessage));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
