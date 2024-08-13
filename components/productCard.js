function ProductCard({ product }) {
        return (
            <div className="border-2 border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-[344px] w-[344px]">
                {product.images.length > 0 && (
                    <img src={product.images[0].src} alt={product.title} className="w-full h-64 object-cover object-center mb-4 rounded" />
                )}
                <h2 className="text-1xl font-semibold mb-2 text-gray-800">{product.title}</h2>
            </div>
        );
}

export default ProductCard;