import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import { Search, ReceiptIndianRupee } from "lucide-react";

const expenses = [
  {
    id: "EXP-1001",
    vehicle: "Tata Prima",
    type: "Fuel",
    amount: "₹8,500",
    date: "12 Jul 2026",
    approvedBy: "Admin",
    status: "Approved",
  },
  {
    id: "EXP-1002",
    vehicle: "Ashok Leyland",
    type: "Maintenance",
    amount: "₹14,200",
    date: "11 Jul 2026",
    approvedBy: "Manager",
    status: "Pending",
  },
  {
    id: "EXP-1003",
    vehicle: "Mahindra Bolero",
    type: "Toll",
    amount: "₹1,250",
    date: "10 Jul 2026",
    approvedBy: "Admin",
    status: "Approved",
  },
  {
    id: "EXP-1004",
    vehicle: "Eicher Pro",
    type: "Insurance",
    amount: "₹32,000",
    date: "08 Jul 2026",
    approvedBy: "Finance",
    status: "Rejected",
  },
];

export default function Expenses() {
  const totalExpenses = "₹55,950";

  const approved = expenses.filter(
    (e) => e.status === "Approved"
  ).length;

  const pending = expenses.filter(
    (e) => e.status === "Pending"
  ).length;

  const rejected = expenses.filter(
    (e) => e.status === "Rejected"
  ).length;

  return (
    <div className="space-y-6">

      <PageHeader
        title="Fuel & Expenses"
        subtitle="Monitor operational expenses and fuel costs"
        action={
          <Button>
            <ReceiptIndianRupee
              size={18}
              className="mr-2 inline"
            />
            Add Expense
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-4">

        <Card className="p-5">
          <p className="text-gray-500">Total Expenses</p>
          <h2 className="mt-2 text-3xl font-bold">
            {totalExpenses}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Approved</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {approved}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Pending</p>
          <h2 className="mt-2 text-3xl font-bold text-yellow-600">
            {pending}
          </h2>
        </Card>

        <Card className="p-5">
          <p className="text-gray-500">Rejected</p>
          <h2 className="mt-2 text-3xl font-bold text-red-600">
            {rejected}
          </h2>
        </Card>

      </div>

      <Card className="p-4">

        <div className="relative max-w-md">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <Input
            placeholder="Search expenses..."
            className="pl-10"
          />

        </div>

      </Card>

      <Card className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Expense ID</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Approved By</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>

          </thead>

          <tbody>

            {expenses.map((expense) => (

              <tr
                key={expense.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {expense.id}
                </td>

                <td className="p-4">
                  {expense.vehicle}
                </td>

                <td className="p-4">
                  {expense.type}
                </td>

                <td className="p-4 font-semibold">
                  {expense.amount}
                </td>

                <td className="p-4">
                  {expense.date}
                </td>

                <td className="p-4">
                  {expense.approvedBy}
                </td>

                <td className="p-4">

                  <Badge
                    color={
                      expense.status === "Approved"
                        ? "green"
                        : expense.status === "Pending"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {expense.status}
                  </Badge>

                </td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <Button className="px-3 py-1">
                      View
                    </Button>

                    <Button className="bg-blue-600 hover:bg-blue-700 px-3 py-1">
                      Edit
                    </Button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </Card>

    </div>
  );
}