import { Card, CategoryBar, Legend } from '@tremor/react';

export function OverviewCard({ title, figure, }: any) {
  return (
    <Card className="mx-auto max-w-md">
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{ title }</p>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{ figure }</p>
      <CategoryBar
        className="mt-4"
        values={[6724, 3621]}
        colors={['emerald', 'red']}
      />
      <Legend
        className="mt-3"
        categories={['Active users', 'Inactive users']}
        colors={['emerald', 'red']}
      />
    </Card>
  );
}