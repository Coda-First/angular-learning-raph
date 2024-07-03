import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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

  private getFaceSnap(): void {
    const faceSnapId = this.route.snapshot.params['id']; // Getting the id from the route
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId); // Getting the faceSnap from the service file
  }
}
