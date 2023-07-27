import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./global.css";

export const metadata = {
  title: "Flexible",
  description: "My first next js project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
