import "@/assets/styles/globals.css";

export const metadata = {
    title: "Dream Rentals| Find the perfect rental",
    description: "Find your dream rental property",
    keywords: "rent, find, properties, online",
};

export default function MainLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}
