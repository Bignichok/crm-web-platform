import React from "react";

import Toolbar from "@/app/components/Toolbar";
import SearchInput from "@/app/components/SearchInput";
import AddCompanyButton from "@/app/components/AddCompanyButton";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
