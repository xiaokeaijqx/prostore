import React from 'react';
import {cn} from "@/lib/utils"
const ProductPrice = ({value,className} :{value:number,className?:string}) => {
    //确保2位小数
    const stringValue = value.toFixed(2);
    //获取int /float
    const [intValue,floatValue]=stringValue.split(".")
    return (
        <p className={cn("text-2xl", className)}>
            <span className="text-xs align-super">$</span>

                {intValue}

            <span className="text-xs">
                .{floatValue}
            </span>
        </p>
    );
};

export default ProductPrice;