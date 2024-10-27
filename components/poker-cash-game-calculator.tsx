"use client";

import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Trash2 } from "lucide-react";

type Player = {
  name: string;
  cashIn: number;
  cashOut: number;
};

type FormData = {
  players: Player[];
};

export function PokerCashGameCalculatorComponent() {
  const [results, setResults] = useState<string[]>([]);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      players: [{ name: "", cashIn: 0, cashOut: 0 }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "players",
  });

  const onSubmit = (data: FormData) => {
    const players = data.players;
    const balances: { [key: string]: number } = {};

    // Calculate individual balances
    players.forEach((player) => {
      balances[player.name] = player.cashOut - player.cashIn;
    });

    // Calculate who owes whom
    const transactions: string[] = [];
    const debtors = Object.entries(balances).filter(
      ([_, balance]) => balance < 0
    );
    const creditors = Object.entries(balances).filter(
      ([_, balance]) => balance > 0
    );

    debtors.forEach(([debtor, debtAmount]) => {
      let remainingDebt = -debtAmount;
      creditors.forEach(([creditor, creditAmount], index) => {
        if (remainingDebt > 0 && creditAmount > 0) {
          const transferAmount = Math.min(remainingDebt, creditAmount);
          transactions.push(
            `${debtor} owes ${creditor} $${transferAmount.toFixed(2)}`
          );
          remainingDebt -= transferAmount;
          creditors[index][1] -= transferAmount;
        }
      });
    });

    setResults(transactions);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-wrap items-end gap-2">
            <div>
              <Label htmlFor={`players.${index}.name`}>Name</Label>
              <Input
                {...register(`players.${index}.name` as const, {
                  required: "Name is required",
                })}
                id={`players.${index}.name`}
                placeholder="Player name"
              />
              {errors.players?.[index]?.name && (
                <p className="text-sm text-destructive mt-1">
                  {errors.players[index]?.name?.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor={`players.${index}.cashIn`}>Cash In ($)</Label>
              <Input
                {...register(`players.${index}.cashIn` as const, {
                  required: "Cash in is required",
                  valueAsNumber: true,
                  min: { value: 0, message: "Must be positive" },
                })}
                id={`players.${index}.cashIn`}
                type="number"
                step="0.01"
              />
              {errors.players?.[index]?.cashIn && (
                <p className="text-sm text-destructive mt-1">
                  {errors.players[index]?.cashIn?.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor={`players.${index}.cashOut`}>Cash Out ($)</Label>
              <Input
                {...register(`players.${index}.cashOut` as const, {
                  required: "Cash out is required",
                  valueAsNumber: true,
                  min: { value: 0, message: "Must be positive" },
                })}
                id={`players.${index}.cashOut`}
                type="number"
                step="0.01"
              />
              {errors.players?.[index]?.cashOut && (
                <p className="text-sm text-destructive mt-1">
                  {errors.players[index]?.cashOut?.message}
                </p>
              )}
            </div>
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove player</span>
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ name: "", cashIn: 0, cashOut: 0 })}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Player
        </Button>
        <Button type="submit" className="ml-2">
          Calculate
        </Button>
      </form>
      {results.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Results</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
