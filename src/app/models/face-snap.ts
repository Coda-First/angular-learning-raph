export class FaceSnap {

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public snaps: number,
    public createdAt: Date
  ) { }
  addSnap(): void {
    this.snaps++;
  }
  removeSnap(): void {
    this.snaps--;
  }
}