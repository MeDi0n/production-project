import React, { Suspense, useContext, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRoutes } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
