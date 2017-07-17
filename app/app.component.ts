import { Component, ViewChild, ElementRef } from "@angular/core";
import { nsCanvasInterfaceModule } from "nativescript-canvas-interface";

@Component({
  selector: "my-app",
  template: `<canvas #chessCanvas>
            </canvas>`
})
export class AppComponent {
  @ViewChild("chessCanvas") canvas : ElementRef;
  oNSCanvasInterface : any;
  context: CanvasRenderingContext2D

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    //this.oNSCanvasInterface = new nsCanvasInterfaceModule.NativescriptCanvasInterface(this.webView, 'webView'); // 'canvasEle' is the value of "id" attribute of the canvas element in web-view 
    //console.log(this.oNSCanvasInterface);
  }
}