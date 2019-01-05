import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CardsService } from './cards.service';
import { Card } from './cards.model';
import { EditCardComponent } from './edit-card/edit-card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  private cards: Card[];
  modalRef: BsModalRef;


  constructor(private cardsService: CardsService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
  }

  openModal(card: any) {
    const initialState = {
      card: card,
      title: `Update ${card.name}`
    };
    this.modalRef = this.modalService.show(EditCardComponent, { initialState, class: 'modal-lg' });

  }

}
