import { Component } from '@angular/core';
import { OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  title = 'MyDemoAngualApp';
  constructor(){
    console.log("constructor called!");
  }
  ngOnInit()
  {
    console.log("OnInit called!");
  }
  ngOnChanges()
  {
    console.log("ngOnChanges called!");
  }
  ngDoCheck()
  {
    console.log("ngDoCheck called!");
  }
  ngAfterContentInit()
  {
    console.log("ngAfterContentInit called!");
  }
  ngAfterContentChecked()
  {
    console.log("ngAfterContentChecked called!");
  }
  ngAfterViewInit()
  {
    console.log("ngAfterViewInit called!");

  }
  ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked called!");
  }
  ngOnDestroy()
  {
    console.log("ngOnDestroy called!");
  }
}
