export type ScrollEventInfo = [number, number, { start: number; end: number }];

export interface DescriptionProps {
  setClientHeight: React.Dispatch<SetStateAction<number[]>>;
}

export type EventInfo = {
  opacity_in: ScrollEventInfo;
  opacity_out: ScrollEventInfo;
  transform_in: ScrollEventInfo;
  transform_out: ScrollEventInfo;
  pin_in?: ScrollEventInfo;
  pin_out?: ScrollEventInfo;
};
