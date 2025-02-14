import {ShoppingCart, UserIcon} from "lucide-react";
import Image from "next/image"
import {APP_NAME} from "@/lib/constans";
import Link from "next/link";
import Menu from "./menu"

const header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href={"/"} className="flex-start ">
                        <Image src={"/images/logo.svg"}
                               alt={`${APP_NAME} logo`}
                               height={48} width={48}
                               priority={true}/>
                        <span className="hidden font-bold text-2xl lg:block">{APP_NAME}</span>
                    </Link>
                </div>
                <Menu/>
            </div>
        </header>
    )
}
export default header