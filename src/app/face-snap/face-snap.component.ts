import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit(): void {
    this.prepareInterface();
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }
  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.userHasSnapped = false;
    this.snapButtonText = 'Oh Snap!'
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops Unsnap!';
    this.userHasSnapped = true;
  }

  prepareInterface(): void {
    this.snapButtonText = 'Oh Snap!'
    this.userHasSnapped = false;
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`/facesnap/${this.faceSnap.id}`); // Redirecting to the faceSnap page
  }
}
