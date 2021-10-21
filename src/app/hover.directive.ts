import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private eleRef: ElementRef) { }

  @HostListener('mouseover') mouseover(eventData:Event){
    this.eleRef.nativeElement.style.color = "yellow";
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){  
    this.eleRef.nativeElement.style.color = "black";  
}
}
