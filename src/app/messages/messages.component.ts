import { Message } from './../Models/messages';
import { Pagination } from './../Models/pagination';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../Service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  pagination: Pagination;
  container = 'Inbox';
  pageNumber = 1;
  pageSize = 5;
  loading = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.loading = true;
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(response => {
      this.messages = response.result;
      this.pagination = response.pagination;
      this.loading = false;
    })
  }

  // deleteMessage(id: number) {
  //   this.confirmService.confirm('Confirm delete message', 'This cannot be undone').subscribe(result => {
  //     if (result) {
  //       this.messageService.deleteMessage(id).subscribe(() => {
  //         this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
  //       })
  //     }
  //   })

  // }

  pageChanged(event: any) {
    if (this.pageNumber !== event.page) {
      this.pageNumber = event.page;
      this.loadMessages();
    }
  }


}
