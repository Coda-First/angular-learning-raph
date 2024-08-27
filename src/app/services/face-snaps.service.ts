import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn: 'root' // Save this service at the root level of the application
})

export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
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
    ).withLocation('Korea'),
    new FaceSnap(
      'High School Sainte Croix Saint Euverte',
      'Where I was studying last year!',
      'https://upload.wikimedia.org/wikipedia/commons/c/c2/Orl%C3%A9ans_Lyc%C3%A9e_Sainte-Croix-Saint-Euverte.jpg',
      5,
      new Date()
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(FaceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap = this.getFaceSnapById(FaceSnapId);

    foundFaceSnap.snap(snapType);
  }

  getFaceSnapById(FaceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === FaceSnapId);

    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }

    return foundFaceSnap;
  }

  addFaceSnap(faceSnap: FaceSnap): void {
    this.faceSnaps.push(faceSnap);
  }
}
