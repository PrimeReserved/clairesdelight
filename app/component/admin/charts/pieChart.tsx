"use client"

import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Eliozu', value: 400 },
  { name: 'Rumuola', value: 300 },
  { name: 'Eleme', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function PieChartInsight() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onPieEnter = (_: unknown, index: any) => {
    setActiveIndex(index);
  };

  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            opacity={index === activeIndex ? 1 : 0.6}
          />
        ))}
      </Pie>
      {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            opacity={index === activeIndex ? 1 : 0.6}
          />
        ))}
      </Pie> */}
      <Tooltip />
    </PieChart>
  );
};

