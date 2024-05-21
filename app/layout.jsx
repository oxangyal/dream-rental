import "@/assets/styles/globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Dream Rentals| Find the perfect rental",
    description: "Find your dream rental property",
    keywords: "rent, find, properties, online",
};

export default function MainLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
