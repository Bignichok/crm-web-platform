import React from "react";

import { getSummaryStats } from "@/lib/api";

import StatisticsCard, {
  StatisticsCardType,
} from "@/app/components/StatisticsCard";

export interface PageProps {}

const labelByStat = {
  promotions: "Total promotions",
  categories: "Total categories",
  newCompanies: "New companies",
  activeCompanies: "Total active companies",
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
        <div key={key} className="col-span-3">
          <StatisticsCard
            type={StatisticsCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </div>
      ))}
    </div>
  );
}
