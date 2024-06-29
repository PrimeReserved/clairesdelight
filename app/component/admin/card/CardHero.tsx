import { RiRecordCircleFill } from '@remixicon/react';

import { Badge } from '@tremor/react';


export function CardHero({ title}: any) {
  return (
    <Badge icon={RiRecordCircleFill}>{ title }</Badge>
  );
}