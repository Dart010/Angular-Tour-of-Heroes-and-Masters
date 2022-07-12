import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // The service exposes its cache of messages and two methods: 
  // One to add() a message to the cache and another to clear() the cache.

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}