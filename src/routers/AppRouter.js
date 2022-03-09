
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import React from "react";

import LoginPage from "../components/LoginPage";
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import Header from "../components/Header"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"




const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<ExpenseDashboardPage />} />
        <Route path="create" element={<AddExpensePage />} />
        <Route path="/edit/" element={<EditExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
        {/* <Route path="edit" element={<EditExpensePage />}>
          <Route
            path=":id"
            element={<EditExpensePage />}
            render={(props) => <EditExpensePage id={props} />}
          />
        </Route> */}
        <Route path="help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
