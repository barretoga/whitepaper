import { useRoutes } from "react-router-dom";

import { Routes } from "~/routes/Routes";

export const AppRoutes = () => {
  const routes = useRoutes(Routes);

  return <>{routes}</>;
};
