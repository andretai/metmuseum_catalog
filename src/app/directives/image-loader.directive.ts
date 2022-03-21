import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageLoader]'
})
export class ImageLoaderDirective {

  @Input('src') imageSrc: any;
  @HostListener('load')

  loadImage()
  {
    this.srcAttr=this.imageSrc;
  }

  @HostBinding('attr.src') srcAttr="https://www.pikpng.com/pngl/b/478-4789851_loading-clipart-please-wait-colorfulness-png-download.png"

  constructor() { }

}
