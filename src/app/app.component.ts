import {
  Component,
  Directive,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  public imgWidth: number;
  public imgHeight: number;
  public url: string;
  public image;

  @ViewChild('layer1', { static: false }) layer1Canvas: ElementRef;
  private context: CanvasRenderingContext2D;
  private layer1CanvasElement: any;

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.image = new Image();
        this.image.src = reader.result;
        this.image.onload = () => {
          this.imgWidth = this.image.width;
          this.imgHeight = this.image.height;
          this.showImage();
        };
      };
    }
  }

  showImage() {
    this.layer1CanvasElement = this.layer1Canvas.nativeElement;
    this.context = this.layer1CanvasElement.getContext('2d');
    this.layer1CanvasElement.width = this.imgWidth;
    this.layer1CanvasElement.height = this.imgHeight;
    this.context.drawImage(this.image, 0, 0, this.imgWidth, this.imgHeight);
    let parent = this;
    this.layer1CanvasElement.addEventListener('mousemove', function (e) {
      console.log('canvas click');
      console.log(e);
      let x = 200;
      let y = 300;
      let w = 400;
      let h = 500;

      if (
        x <= e.clientX &&
        e.clientX <= x + w &&
        y <= e.clientY &&
        e.clientY <= y + h
      )
        parent.drawRect('red');
      else parent.drawRect();
    });

    this.drawRect();
  }

  drawRect(color = 'black') {
    this.context.beginPath();
    this.context.moveTo(753, 35);
    this.context.lineTo(825, 13);
    this.context.lineTo(841, 65);
    this.context.lineTo(769, 88);
    this.context.lineWidth = 10;
    this.context.strokeStyle = color;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(551, 143);
    this.context.lineTo(582, 142);
    this.context.lineTo(583, 175);
    this.context.lineTo(582, 176);
    this.context.lineWidth = 10;
    this.context.strokeStyle = color;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(45, 8);
    this.context.lineTo(907, -3);
    this.context.lineTo(913, 465);
    this.context.lineTo(51, 476);
    this.context.lineWidth = 10;
    this.context.strokeStyle = color;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(616, 288);
    this.context.lineTo(644, 289);
    this.context.lineTo(643, 303);
    this.context.lineTo(615, 302);
    this.context.lineWidth = 10;
    this.context.strokeStyle = color;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(617, 415);
    this.context.lineTo(645, 416);
    this.context.lineTo(644, 431);
    this.context.lineTo(616, 430);
    this.context.lineWidth = 10;
    this.context.strokeStyle = color;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(739, 571);
    this.context.lineTo(703, 612);
    this.context.lineTo(668, 580);
    this.context.lineTo(704, 540);
    this.context.lineWidth = 10;
    this.context.strokeStyle = color;
    this.context.stroke();
  }
}
