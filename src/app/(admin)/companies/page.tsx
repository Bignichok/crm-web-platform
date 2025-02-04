import React from "react";

import Header from "@/app/components/header";
import Toolbar from "@/app/components/toolbar";
import SearchInput from "@/app/components/searchInput";
import AddCompanyButton from "@/app/components/addCompanyButton";
import CompanyTable from "@/app/components/companyTable";
import CompanyRow from "@/app/components/companyRow";
import { Status } from "@/app/components/statusLabel";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
