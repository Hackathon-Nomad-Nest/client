
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { IRoutesConfigType } from "src/lib/types";

const PublicRoute = ({ config }: { config: IRoutesConfigType }) => {
  const {
    component: Component,
    isHeader = true,
    isFooter = true
  } = config;

  return (
    <>
      {isHeader ? <Header /> : null}
      <Component />
      {isFooter ? <Footer /> : null}
    </>
  );
};

export default PublicRoute;
