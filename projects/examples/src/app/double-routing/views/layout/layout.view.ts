import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.view.html',
  styleUrls: ['./layout.view.scss']
})
export class LayoutView implements OnInit {


  link1 = ['', { outlets: {
    // 'chat-outlet': 'first-chat',
    'panel-outlet': ['second-panel']
  }}];

  // link2 = ['/', { outlets: {
  //   // 'chat-outlet': 'first-chat',
  //   'panel-outlet': 'second-panel'
  // }}];

  // link3 = ['/', { outlets: {
  //   // 'chat-outlet': 'second-chat',
  //   'panel-outlet': 'first-panel'
  // }}];

  // link4 = ['/', { outlets: {
  //   // 'chat-outlet': 'second-chat',
  //   'panel-outlet': 'second-panel'
  // }}];

  constructor() { }

  ngOnInit(): void {
  }

}
