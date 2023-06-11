export interface Strategy {
  name: string;
  build(args: any[]): void;
}
