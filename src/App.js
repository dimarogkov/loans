import {Route, Routes} from "react-router-dom";
import Loans from "./components/loans/Loans";
import Error from "./components/error/Error";
import Layout from "./hoc/Layout/layout";

const App = () => {
  return (
      <Layout>
          <Routes>
              <Route exact path="/" element={ <Loans /> } />
              <Route path="*" element={ <Error /> } />
          </Routes>
      </Layout>
  );
};

export default App;
