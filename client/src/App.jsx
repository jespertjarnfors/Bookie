import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import { ProductProvider } from "./contexts/ProductContext";
import { AppRoutes } from "./routes/AppRoutes";


function App() {


  return (
    <>
    <UserContextProvider>
    <ProductProvider>
    <AppRoutes>
    </AppRoutes>
    </ProductProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
