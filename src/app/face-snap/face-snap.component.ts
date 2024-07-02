import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService) { }

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
    this.faceSnapsService.unSnapFaceById(this.faceSnap.id);
    this.userHasSnapped = false;
    this.snapButtonText = 'Oh Snap!'
  }

  snap() {
    this.faceSnapsService.snapFaceById(this.faceSnap.id);
    this.snapButtonText = 'Oops Unsnap!';
    this.userHasSnapped = true;
  }
}
