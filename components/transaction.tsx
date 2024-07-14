"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { SearchIcon } from "lucide-react"

type TransactionType = "credit" | "debit";

interface Transaction {
  id: number;
  amount: number;
  date: string; // ISO format date string
  type: TransactionType;
  description: string;
  status: "pending" | "completed" | "failed";
}

const transactions: Transaction[] = [
  {
    id: 1,
    amount: 150.75,
    date: "2024-07-14T10:30:00Z",
    type: "credit",
    description: "Payment from client A",
    status: "completed"
  },
  {
    id: 2,
    amount: -50.00,
    date: "2024-07-15T12:45:00Z",
    type: "debit",
    description: "Purchase of office supplies",
    status: "completed"
  },
  {
    id: 3,
    amount: -20.00,
    date: "2024-07-16T09:15:00Z",
    type: "debit",
    description: "Monthly subscription fee",
    status: "pending"
  },
  {
    id: 4,
    amount: 200.00,
    date: "2024-07-17T11:00:00Z",
    type: "credit",
    description: "Refund from vendor",
    status: "completed"
  }
];

console.log(transactions);


export function Transaction() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(transactions.length / itemsPerPage)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="px-6 py-4">
        <CardTitle>Transactions</CardTitle>
        <CardDescription>View and manage your recent transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted/40 p-4 rounded-lg">
            <div className="text-xs text-muted-foreground">Total Transactions</div>
            <div className="text-2xl font-bold">124</div>
          </div>
          <div className="bg-muted/40 p-4 rounded-lg">
            <div className="text-xs text-muted-foreground">Total Amount</div>
            <div className="text-2xl font-bold">$12,345.67</div>
          </div>
          <div className="bg-muted/40 p-4 rounded-lg">
            <div className="text-xs text-muted-foreground">Average Amount</div>
            <div className="text-2xl font-bold">$99.56</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            type="search"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right w-[120px]">Amount</TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className="text-right">${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{transaction.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center mt-6">
        <Pagination>
            <PaginationContent>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}
