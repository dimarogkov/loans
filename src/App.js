import {Route, Routes, Navigate} from "react-router-dom";
import Loans from "./components/loans/Loans";
import Error from "./components/error/Error";
import Layout from "./hoc/Layout/layout";

const App = () => (
  <Layout>
      <Routes>
          <Route path="/" element={<Navigate replace to="/loans" />} />
          <Route exact path="/loans" element={ <Loans /> } />
          <Route path="*" element={ <Error /> } />
      </Routes>
  </Layout>
);

export default App;
