import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.body_html}</p>
            {product.images.length > 0 && (
              <img src={product.images[0].src} alt={product.title} style={{ width: '100px', height: 'auto' }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
