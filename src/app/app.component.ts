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
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Coda',
        'Where I\'m studying',
        'https://static.wixstatic.com/media/324d06_440fbbb68a694e76884a751602f6c32c~mv2.jpg/v1/crop/x_20,y_35,w_925,h_338/fill/w_394,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PROFILE-PIC-LK-3_edited.jpg',
        20,
        new Date()
      ),
      new FaceSnap(
        'Busan, Seoul',
        'Where I\'m going this summer!',
        'https://media.istockphoto.com/id/1137568153/fr/photo/fleurs-de-cerisier-au-printemps-s%C3%A9oul-en-cor%C3%A9e.jpg?s=612x612&w=0&k=20&c=RTos76QZmAiCX2VvWL0w75O8fSqm4tqLT6T2_4LqEV0=',
        100,
        new Date()
      ),
      new FaceSnap(
        'High School Sainte Croix Saint Euverte',
        'Where I was studying last year!',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/Orl%C3%A9ans_Lyc%C3%A9e_Sainte-Croix-Saint-Euverte.jpg',
        5,
        new Date()
      )
    ]
    this.faceSnaps[1].setLocation('Korea');
  }
}
