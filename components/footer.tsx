import React from 'react';
import {APP_NAME} from "@/lib/constans";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="p-5 flex-center">
                {currentYear}{APP_NAME}.All rights reserved.

            </div>


        </footer>
    );
};

export default Footer;