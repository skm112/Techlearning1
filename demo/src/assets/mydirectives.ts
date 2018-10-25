import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
@Directive({
  selector: "[my-highlighter]"
})
export class MyHighlighter {
  constructor(private el: ElementRef) {
    el.nativeElement.style.background = "yellow";
  }
  @HostListener("mouseover")
  onmouseover() {
    this.el.nativeElement.style.background = "red";
  }
  @HostListener("mouseleave")
  onmouseleave() {
    this.el.nativeElement.style.background = "yellow";
  }
  @HostListener("click")
  onclick() {
    this.el.nativeElement.style.background = "green";
  }
}

@Directive({
  selector: "[myIf]"
})
export class MyIf {
  constructor(
    private templeteRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private el: ElementRef
  ) {}

  @Input() set myIf(shouldAdd:boolean){
      if (shouldAdd) {
          this.viewContainer.createEmbeddedView(this.templeteRef);
      } else {
          this.viewContainer.clear();
      }
  }
}
