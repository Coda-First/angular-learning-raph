import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, PercentPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;
  myPercentage: number = 0.8899;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!'
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }
  unSnap() {
    this.faceSnap.removeSnap();
    this.userHasSnapped = false;
    this.snapButtonText = 'Oh Snap!'
  }

  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops Unsnap!';
    this.userHasSnapped = true;
  }
}
