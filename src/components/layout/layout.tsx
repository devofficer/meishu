import { ReactNode } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

export interface LayoutProps {
    children?: ReactNode | ReactNode[];
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}