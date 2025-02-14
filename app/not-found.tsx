"use client"
import {APP_NAME} from "@/lib/constans";
import React from 'react';
import Image from "next/image"
import {Button} from "@/components/ui/button"

const NotFoundPage = () => {
    return (
        <div className={"flex flex-col items-center justify-center min-h-screen"}>
            <Image src={"/404.png"} alt={`${APP_NAME} logo`} width={48} height={48} priority={true}/>
            Not Found
            <div className="p-6 w-1 3 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Not Found
                </h1>
               <p className={"text-destructive"}>Could not find the page you are looking for.

               </p>
                <Button variant={"outline"} className={"mt-4 ml-2"} onClick={() => window.history.back() }></Button>
            </div>
        </div>
    );
};

export default NotFoundPage;