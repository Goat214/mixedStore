import { useEffect, useState } from "react";
import ProductCard from "./components/product";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      const res = await fetch("https://dummyjson.com/products?limit=192");
      const data = await res.json();
      setProducts(data.products);
      setIsPending(false);
    };

    getData();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isPending) {
    return (
      <div className="h-screen w-full grid place-items-center bg-black/40">
        <span className="loading w-[70px] text-white loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className=" min-h-screen bg-gray-100 py-10 px-6">
      <div className="align-elements"> 
      <img
            src="https://images.uzum.uz/cvcg2f3vgbkm5ehkika0/main_page_banner.jpg"
            alt=""
            class="mb-6 rounded-2xl"
          />
      </div>

        <div className="align-elements grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export { App };
