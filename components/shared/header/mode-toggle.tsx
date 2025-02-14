'use client'
import {useState,useEffect} from "react";
import React from 'react';
import {useTheme} from "next-themes";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {SunIcon, MoonIcon, SunMoon} from "lucide-react";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
   //避免一个报错
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted){
        return null;
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className={"focus-visible:ring-0 focus-visible:offset-0"}>
                    {
                        theme==="system" ?(<SunMoon/>) :theme==="dark"?(<MoonIcon/>):(<SunIcon/>)
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuCheckboxItem checked={theme==="system"} onClick={()=>setTheme("system")}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme==="light"} onClick={()=>setTheme("light")}>
                    light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme==="dark"} onClick={()=>setTheme("dark")}>
                    dark
                </DropdownMenuCheckboxItem>
                {/*<DropdownMenuItem onClick={()=>setTheme("light")}>*/}
                {/*    Light*/}
                {/*</DropdownMenuItem>*/}
                {/*<DropdownMenuItem onClick={()=>setTheme("dark")}>*/}
                {/*    Dark*/}
                {/*</DropdownMenuItem>*/}
                {/*<DropdownMenuItem  onClick={()=>setTheme("system")}>*/}
                {/*    System*/}
                {/*</DropdownMenuItem>*/}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;