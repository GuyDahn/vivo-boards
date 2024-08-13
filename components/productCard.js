function ProductCard({ product }) {
    console.log(product); // to see product data

    return (
        <div 
            className="border-2 border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-[400px] w-[320px] flex flex-col justify-between bg-cover bg-center ml-2 my-8" 
            style={{ backgroundImage: `url(${product.images.length > 0 ? product.images[0].src : ''})` }}
        >
            <div className="bg-white bg-opacity-50 p-4 rounded w-full">
                <h2 className="text-1xl font-semibold mb-2 text-gray-800">{product.title}</h2>
                <div className="text-gray-600 text-xs" dangerouslySetInnerHTML={{ __html: product.body_html }} />
            </div>
            <div className="flex justify-between items-center mt-4 px-2">
                <p className="text-gray-800 font-bold">{product.variants[0].price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default ProductCard;