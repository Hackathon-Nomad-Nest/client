
import Header from "src/components/Header";
import { IRoutesConfigType } from "src/lib/types";

const PublicRoute = ({ config }: { config: IRoutesConfigType }) => {
  const {
    component: Component,
    isHeader = true,
  } = config;

  return (
    <>
      {isHeader ? <Header /> : null}
      <Component />
    </>
  );
};

export default PublicRoute;
