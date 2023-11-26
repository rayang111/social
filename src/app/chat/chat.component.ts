import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  userInput = '';
  chatHistory: string[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage() {
    this.chatHistory.push(`User: ${this.userInput}`);
    this.chatService.sendMessage(this.userInput).subscribe(
      (response) => {
        const assistantResponse = response.response;
        this.chatHistory.push(`Assistant: ${assistantResponse}`);
      },
      (error) => {
        console.error(error);
      }
    );
    this.userInput = ''; // Efface la zone de saisie après l'envoi du message
  }

}
