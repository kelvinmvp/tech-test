import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, useTheme } from "styled-components/macro";
import theme from "ui/base";

const ViewContext = createContext();

export const useView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
  const [sidebarOpen, setSidebar] = useState(
    window.outerWidth > theme.breakpointsToPx("medium")
  );

  const state = useMemo(
    () => ({
      sidebarOpen: {
        value: sidebarOpen,
        set: setSidebar,
      },
    }),
    [sidebarOpen, setSidebar]
  );
  theme.computedSizes = useMemo(
    () => theme.getComputedSizes({ sidebarOpen }),
    [sidebarOpen]
  );
  return (
    <ViewContext.Provider value={state}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ViewContext.Provider>
  );
};

export default ViewContext;
