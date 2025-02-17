const wordcloud: (createCanvas: any) => (
  canvas: any,
  options?: {
    list: [string, number][];
    gridSize: number;
    rotateRatio: number;
    rotationSteps: number;
    rotationRange: number[];
    backgroundColor: string;
    sizeRange: number[];
    color: string | ((word: string, weight: number) => string);
    fontFamily: string;
    fontWeight: string;
    shape?: string;
    origin?: number[];
  }
) => { draw: () => void; updateList: (list: [string, number][]) => void };
export default wordcloud;
