export type ScrollEventInfo = [number, number, { start: number; end: number }];
export type ScrollEventInfo2 = number[];

export interface DescriptionProps {
  setClientHeight: React.Dispatch<SetStateAction<number[]>>;
}

export type EventInfo = {
  opacity_in: ScrollEventInfo;
  opacity_out: ScrollEventInfo;
  transform_in?: ScrollEventInfo;
  transform_out?: ScrollEventInfo;
  scale_in?: ScrollEventInfo;
};
