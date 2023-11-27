import MenuSideBar from "@/components/MenuSideBar";
import "./globals.css";
import { Inter } from "next/font/google";
import HeaderMobile from "@/components/MenuBarMobile";
import SideNav from "@/components/Sidebar";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import PageWrapper from "@/components/page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie-Box",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <MenuSideBar />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
