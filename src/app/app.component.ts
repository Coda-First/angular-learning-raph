import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Coda',
      'Where I\'m studying',
      'https://static.wixstatic.com/media/324d06_440fbbb68a694e76884a751602f6c32c~mv2.jpg/v1/crop/x_20,y_35,w_925,h_338/fill/w_394,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PROFILE-PIC-LK-3_edited.jpg',
      0,
      new Date()
    )
  }
}
