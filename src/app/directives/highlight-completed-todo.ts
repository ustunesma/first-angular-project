import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  readonly isCompleted = input(false);
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly stylesEffect = effect(() => {
    const nativeElement = this.el.nativeElement;

    if (this.isCompleted()) {
      nativeElement.style.textDecoration = 'line-through';
      nativeElement.style.backgroundColor = '#d3f9d8';
      nativeElement.style.color = '#6c757d';
    } else {
      nativeElement.style.textDecoration = 'none';
      nativeElement.style.backgroundColor = '#fff';
      nativeElement.style.color = '#000000';
    }
  });
}
