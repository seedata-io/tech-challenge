export interface IEvent {
  id: String;
  seedId: String;
  type: String;
  description: number;
  threatLevelCode: number;
  createdDateTime: Date;
  seed: ISeed;
  threatLevel: string;
}

export interface ISeed {
  id: String;
  name: String;
  domain: String;
}
