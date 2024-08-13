import ProductCard from "./productCard";

function ProductList({ products }) {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center sm:justify-items-stretch">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;