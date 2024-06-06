import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface FAQ {
  category: string;
  questions: { question: string, answer: string }[];
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [
    trigger('slideToggle', [
      state('open', style({
        height: '*',
        opacity: 1,
        padding: '10px'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        padding: '0px 10px'
      })),
      transition('open <=> closed', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class FaqComponent {
  faqs: FAQ[] = [
    {
      category: 'Booking & Reservations',
      questions: [
        { question: 'How do I book a flight?', answer: 'You can book a flight through our website or mobile app.' },
        { question: 'Can I change my reservation?', answer: 'Yes, you can change your reservation through the "Manage Booking" section.' },
        { question: 'What payment methods are accepted?', answer: 'We accept credit cards, debit cards, and PayPal.' }
      ],
      isOpen: false
    },
    {
      category: 'Baggage Information',
      questions: [
        { question: 'What is the baggage allowance?', answer: 'The baggage allowance varies by airline and class of service.' },
        { question: 'Can I bring a carry-on bag?', answer: 'Yes, most airlines allow one carry-on bag.' },
        { question: 'What items are prohibited in checked baggage?', answer: 'Prohibited items include explosives, flammable items, and certain chemicals.' }
      ],
      isOpen: false
    },
    {
      category: 'Check-in & Boarding',
      questions: [
        { question: 'When should I arrive at the airport?', answer: 'It is recommended to arrive at least 2 hours before a domestic flight and 3 hours before an international flight.' },
        { question: 'How do I check in for my flight?', answer: 'You can check in online, through the mobile app, or at the airport.' },
        { question: 'What do I need to check in?', answer: 'You will need your booking reference and a valid ID.' }
      ],
      isOpen: false
    },
    {
      category: 'In-flight Services',
      questions: [
        { question: 'What meals are served on the flight?', answer: 'Meal options vary by airline and class of service.' },
        { question: 'Is Wi-Fi available on board?', answer: 'Many airlines offer Wi-Fi on board for a fee or free of charge.' },
        { question: 'Can I request special assistance?', answer: 'Yes, you can request special assistance when booking your flight.' }
      ],
      isOpen: false
    },
    {
      category: 'Frequent Flyer Program',
      questions: [
        { question: 'How do I join the frequent flyer program?', answer: 'You can join the program by signing up on the airline’s website.' },
        { question: 'How do I earn points?', answer: 'Points can be earned by flying with the airline or its partners, and by using co-branded credit cards.' },
        { question: 'How do I redeem my points?', answer: 'Points can be redeemed for flights, upgrades, and other rewards.' }
      ],
      isOpen: false
    },
    {
      category: 'Cancellations & Refunds',
      questions: [
        { question: 'Can I cancel my flight?', answer: 'Yes, you can cancel your flight, but cancellation fees may apply.' },
        { question: 'How do I request a refund?', answer: 'Refunds can be requested through the "Manage Booking" section on our website.' },
        { question: 'How long does it take to process a refund?', answer: 'Refunds are typically processed within 7-10 business days.' }
      ],
      isOpen: false
    },
    {
      category: 'Travel Documents',
      questions: [
        { question: 'What documents do I need to travel?', answer: 'You will need a valid passport and any required visas.' },
        { question: 'Can I travel with an expired passport?', answer: 'No, you cannot travel with an expired passport.' },
        { question: 'How do I apply for a visa?', answer: 'Visa application processes vary by country. Please check the consulate’s website for details.' }
      ],
      isOpen: false
    },
    {
      category: 'Health & Safety',
      questions: [
        { question: 'What health measures are in place due to COVID-19?', answer: 'Health measures include mandatory masks, enhanced cleaning, and social distancing.' },
        { question: 'Do I need a COVID-19 test before flying?', answer: 'Some destinations require a negative COVID-19 test before flying.' },
        { question: 'What should I do if I feel unwell during the flight?', answer: 'Inform the cabin crew immediately if you feel unwell.' }
      ],
      isOpen: false
    },
    {
      category: 'Travel Insurance',
      questions: [
        { question: 'What does travel insurance cover?', answer: 'Travel insurance typically covers trip cancellations, medical emergencies, and lost baggage.' },
        { question: 'How do I purchase travel insurance?', answer: 'You can purchase travel insurance through our website during the booking process.' },
        { question: 'Can I claim a refund on my travel insurance?', answer: 'Refund policies vary by provider. Please check the terms and conditions of your policy.' }
      ],
      isOpen: false
    },
    {
      category: 'Special Assistance',
      questions: [
        { question: 'How do I request special assistance?', answer: 'You can request special assistance when booking your flight or by contacting customer service.' },
        { question: 'Are there wheelchair services at the airport?', answer: 'Yes, wheelchair services are available at most airports.' },
        { question: 'Can I travel with my service animal?', answer: 'Yes, service animals are allowed on board. Please notify us in advance.' }
      ],
      isOpen: false
    }
  ];

  toggleCategory(faq: FAQ) {
    faq.isOpen = !faq.isOpen;
  }
}
