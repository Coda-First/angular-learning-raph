import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent {
  title: string = '';
  description: string = '';
  imageUrl: string = '';
  location: string = '';

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  onSubmit(): void {
    const newFaceSnap = new FaceSnap(
      this.title,
      this.description,
      this.imageUrl,
      0,
      new Date()
    ).withLocation(this.location);

    this.faceSnapsService.addFaceSnap(newFaceSnap);
    this.router.navigateByUrl('/facesnaps'); // Redirect to the face snaps list
  }
}
