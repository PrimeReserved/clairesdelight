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
import ItemBadge from './ItemBadge';

interface TableProps {
  data: any[];
  title: string;
}


export default function Customers({ data, title }: Readonly<TableProps>) {

    if (!Array.isArray(data) || data.length === 0) return null;

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        hour12: true,
    };

  return (
    <Card className='col-span-2'>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-2xl">{ title }</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            {/* <TableHeaderCell>Index</TableHeaderCell> */}
            {/* <TableHeaderCell>ID</TableHeaderCell> */}
            <TableHeaderCell>Reference ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>Address</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Channel</TableHeaderCell>
            <TableHeaderCell>Source</TableHeaderCell>
            <TableHeaderCell>Paid At</TableHeaderCell>
            <TableHeaderCell>IP Address</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item: any, index: number) => (
            <TableRow key={item?.id}>
              {/* <TableCell>{index}</TableCell> */}
              {/* <TableCell>{item?.id}</TableCell> */}
              <TableCell>{item?.reference}</TableCell>
              <TableCell>{`${item?.customer?.first_name} ${item?.customer?.last_name}`}</TableCell>
              <TableCell>
                {item?.customer?.phone}
              </TableCell>
              <TableCell>
               {item?.metadata?.custom_fields?.map((item: any) => (
                <span key={item?.display_name}>{item?.value}</span>
               ))}
              </TableCell>
              <TableCell>
              <ItemBadge item={item} />
              </TableCell>
              <TableCell>{item?.channel}</TableCell>
              <TableCell>{item?.source?.source}</TableCell>
              <TableCell>{item?.paidAt ?  new Date(item.paidAt).toLocaleString('en-US', options) : null}</TableCell>
              <TableCell><Badge color={`blue`}>{item?.ip_address}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}