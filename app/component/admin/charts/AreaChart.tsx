import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    Spices: 2890,
    'Suya': 2338,
  },
  {
    date: 'Feb 22',
    Spices: 2756,
    'Suya': 2103,
  },
  {
    date: 'Mar 22',
    Spices: 3322,
    'Suya': 2194,
  },
  {
    date: 'Apr 22',
    Spices: 3470,
    'Suya': 2108,
  },
  {
    date: 'May 22',
    Spices: 3475,
    'Suya': 1812,
  },
  {
    date: 'Jun 22',
    Spices: 3129,
    'Suya': 1726,
  },
  {
    date: 'Jul 22',
    Spices: 3490,
    'Suya': 1982,
  },
  {
    date: 'Aug 22',
    Spices: 2903,
    'Suya': 2012,
  },
  {
    date: 'Sep 22',
    Spices: 2643,
    'Suya': 2342,
  },
  {
    date: 'Oct 22',
    Spices: 2837,
    'Suya': 2473,
  },
  {
    date: 'Nov 22',
    Spices: 2954,
    'Suya': 3848,
  },
  {
    date: 'Dec 22',
    Spices: 3239,
    'Suya': 3736,
  },
];

const valueFormatter = function (number: number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

export function AreaChartSale() {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Spices Revenue</h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,567</p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['Spices', 'Suya']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
  );
}