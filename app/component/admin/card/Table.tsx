import { Product } from '@/typings';
import { RiFlag2Line } from '@remixicon/react';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

interface TableProps {
  data: Product[];
  title: string;
}


export default function TableData({ data, title }: Readonly<TableProps>) {
  return (
    <Card className='col-span-2'>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-2xl">{ title }</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Index</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Origin</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: Product, index: number) => (
            <TableRow key={item._id}>
              <TableCell>{index}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.price}
              </TableCell>
              <TableCell>
                {item.origin}
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
                  {item.stock}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}