import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  hasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!'
    this.hasSnapped = false;
  }

  onUserSnap(): void {
    if (this.hasSnapped) {
      this.faceSnap.snaps--;
      this.hasSnapped = false;
      this.snapButtonText = 'Oh Snap!'
    } else {
      this.faceSnap.snaps++;
      this.snapButtonText = 'Oops Unsnap!';
      this.hasSnapped = true;
    }
  }
}
