import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {describe} from "node:test";
import ProductPrice from "@/components/shared/product/product-price";

interface Product {
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeatured: boolean;
    banner: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return (
        <Card className={"w-full max-w-sm"}>
            <CardHeader className={"p-0 items-center "}>
                <Link href={`/product/${product.slug}`}>
                    <Image src={product.images[0]}
                           alt={product.name}
                           height={300}
                           width={300}
                           priority={true}
                    />
                </Link>
            </CardHeader>
            <CardContent className={"p-4 grid gap-4"}>
                <div className="text-xs">
                    {product.brand}
                </div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className={"text-sm font-medium"}>{product.name}</h2>
                </Link>
            <div className="flex-between gap-4">
                <p>{product.rating} Starts</p>
                {product.stock>0?(
                    <ProductPrice value={Number(product.price)} className={"text-red-500"}/>
                ):(
                    <p className="text-destructive">
                        Out of Stock
                    </p>
                )}
            </div>

            </CardContent>
        </Card>

    );
};

export default ProductCard;