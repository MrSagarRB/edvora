import Filter from "./components/Filter";
import Product from "./components/Product";

function App() {
  return (
    <div className="App bg-gray-700 flex h-screen ">
      <Filter />
      <div className="pl-4 space-y-2">
        <h1 className="text-white text-[35px]">Edvora</h1>
        <h1 className="text-gray-400 text-[25px]">Product</h1>

        <div className="space-y-4">
        <h1 className="text-[20px] text-zinc-100 pb-2">Product Name</h1>
        <hr />
        <Product />
        </div>

        <div className="space-y-4">
        <h1 className="text-[20px] text-zinc-100 pb-2">Product Name</h1>
        <hr />
        <Product />
        </div>





      </div>
    </div>
  );
}

export default App;
