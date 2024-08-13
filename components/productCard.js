function ProductCard({ product }) {
    console.log(product); // Add this line to log the product object

    return (
        <div className="border-2 border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-[400px] w-[320px]">
            {product.images.length > 0 && (
                <img src={product.images[0].src} alt={product.title} className="w-full h-64 object-cover object-center mb-4 rounded" />
            )}
            <h2 className="text-1xl font-semibold mb-2 text-gray-800">{product.title}</h2>
            <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: product.body_html }} />
            <p className="text-gray-800 font-bold">{product.variants[0].price}</p>
        </div>
    );
}

export default ProductCard;