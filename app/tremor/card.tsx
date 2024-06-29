import { BadgeDelta, Card, Metric, Text } from '@tremor/react';

interface SalesCardProps {
  title: string;
  figure: number | string;
}

export function SalesCard({ title, figure }: Readonly<SalesCardProps>) {
  return (
    <Card className="mx-auto max-w-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{ title }</h4>
        <BadgeDelta
          deltaType="moderateIncrease"
          isIncreasePositive={true}
          size="xs"
        >
          +9.3%
        </BadgeDelta>
      </div>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{ figure }</p>
    </Card>
  );
}