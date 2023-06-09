export type ScrollEventInfo = [number, number, { start: number; end: number }];

export interface DescriptionProps {
  clientScrollY: number;
  setClientHeight: React.Dispatch<SetStateAction<number[]>>;
  sceneInfo: number;
  ratio: number;
}

export type EventInfo = {
  opacity_in: ScrollEventInfo;
  opacity_out: ScrollEventInfo;
  transform_in: ScrollEventInfo;
  transform_out: ScrollEventInfo;
};
