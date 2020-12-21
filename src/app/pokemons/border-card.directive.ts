import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private readonly defaultColor: string = '#009688'; // das ist gleich wie const in js fuer klassen
    private defaultHeight: number = 70;
    private defaultWidth: number = 40;


    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
        this.setWidth(this.defaultWidth);
    }

    @Input('pkmnBorderCard') borderColor: string;

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        this.el.nativeElement.style.border = this.getBorderStyle(color);
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + '%';
    }

    private getBorderStyle(color: string): string {
        return 'solid 4px ' + color;
    }

    private setWidth(width: number) {
        this.el.nativeElement.style.height = width + '%';
    }


}
