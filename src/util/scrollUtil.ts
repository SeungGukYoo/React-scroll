import { ScrollEventInfo } from "./../../types/component.d";
type SectionInfo = ScrollEventInfo | number[];

const ScrollEvent = (section_info: SectionInfo | number[], currentHeight: number, clientScrollY: number) => {
  const eventStart =
    section_info[2] && typeof section_info[2] === "object" ? section_info[2]?.start * currentHeight : undefined;
  const eventEnd =
    section_info[2] && typeof section_info[2] === "object" ? section_info[2]?.end * currentHeight : undefined;
  let rv = 0;
  if (eventStart !== undefined && eventEnd !== undefined) {
    const eventHeight = eventEnd - eventStart;

    if (clientScrollY >= eventStart && clientScrollY <= eventEnd) {
      rv = ((clientScrollY - eventStart) / eventHeight) * (section_info[1] - section_info[0]) + section_info[0];
    } else if (clientScrollY < eventStart) rv = section_info[0];
    else if (clientScrollY > eventEnd) rv = section_info[1];
  } else {
    const ratio = currentHeight / clientScrollY;
    rv = ratio * (section_info[1] - section_info[0]) + section_info[0];
  }

  return rv;
};
export default ScrollEvent;
