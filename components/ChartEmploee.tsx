"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartEmploee({
  filteredMonths,
}: {
  filteredMonths: { MonthCreated: string }[] | undefined;
}) {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthCount: Record<string, number> =
    filteredMonths?.reduce((acc: Record<string, number>, item) => {
      const month = item.MonthCreated;
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {}) ?? {};

  // Create the chart data
  const chartData = months.map((month) => ({
    month,
    desktop: monthCount[month] || 0, // Use count or default to 0
  }));

  console.log(chartData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emploee Chart</CardTitle>
        <CardDescription>January - December 2024-2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
