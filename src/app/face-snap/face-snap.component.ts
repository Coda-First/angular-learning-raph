import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Coda';
    this.description = 'Where I\'m studying';
    this.imageUrl = 'https://static.wixstatic.com/media/324d06_440fbbb68a694e76884a751602f6c32c~mv2.jpg/v1/crop/x_20,y_35,w_925,h_338/fill/w_394,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PROFILE-PIC-LK-3_edited.jpg';
    this.createdAt = new Date();
    this.snaps = 0;
  }

  onAddSnap(): void {
    this.snaps++;
  }
}
