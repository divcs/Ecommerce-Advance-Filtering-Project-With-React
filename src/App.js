import { Nav } from "./Navigation/Nav";
import { Products } from "./Products/Products";
import { Recommended } from "./Recommended/Recommended";
import { Colors } from "./Sidebar/Colors/Colors";
import { Sidebar } from "./Sidebar/Sidebar";


function App() {
  return (
    <>
    <Sidebar/>
    <Nav/>
    <Recommended/>
    <Products/>
    </>
  );
}

export default App;
