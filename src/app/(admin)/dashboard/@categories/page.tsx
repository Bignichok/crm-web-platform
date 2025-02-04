import React from "react";

import { getSummaryCategories } from "@/lib/api";

import StatisticsCard, {
  StatisticsCardType,
} from "@/app/components/StatisticsCard";
import DashboardCard from "@/app/components/DashboardCard";

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatisticsCard
              type={StatisticsCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
