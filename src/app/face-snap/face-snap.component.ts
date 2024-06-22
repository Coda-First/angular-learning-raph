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
  created_at!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title = 'Coda';
    this.description = 'Where I\'m studying';
    this.created_at = new Date();
    this.snaps = 0;
  }
}
