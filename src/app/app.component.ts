import { Component, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
import * as hljs from 'highlight.js';
import vba from 'highlightjs-vba';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    hljs.registerLanguage('vba', vba);
    hljs.highlightAll();
    Reveal.initialize();
  }
}
