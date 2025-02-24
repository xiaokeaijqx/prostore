import React from 'react';
import ProductCard from "@/components/shared/product/product-card";

const ProductList = ({data, title,limit}: { data: any; title?: string;limit?:number }) => {
   const limitedData =limit ? data.slice(0, limit) : data;
    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            {data.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {limitedData
                        .map((product: any) => (
                        <ProductCard key={product.slug} product={product}>{product.name}</ProductCard>

                    ))}


                </div>


            ) : (
                <div>
                    <p>No products found</p>
                </div>
            )}
        </div>


    );
};

export default ProductList;