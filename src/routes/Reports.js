import React from "react";
import { reportStore } from "store";
import { Box, Spinner } from "ui/base";
import ReportsEmptyState from "ui/blocks/EmptyStates/Reports";
import { Cards } from "ui/components";
import { useSnapshot } from "valtio";
import { ReportsPanel } from "ui/components/Reports";

const Reports = () => {
  const reports = useSnapshot(reportStore);

  return (
    <>
      <Cards.Reports />
      {reports?.data?.length === 0 && <ReportsEmptyState />}
      {reports?.loading && (
        <Spinner my={"auto"} spinnerColor="primary" width={120} height={120} />
      )}
      {reports?.data?.length > 0 && <ReportsPanel />}
    </>
  );
};

export default Reports;
