export class FaceSnap {

  location?: string;

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

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}