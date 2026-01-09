import Header from "@/components/header";
import Footer from "@/components/footer";

import { containerStyle, contentStyle, headerStyle, footerStyle } from './styles';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={containerStyle}>
            <div className={headerStyle}>
                <Header />
            </div>
            <div className={contentStyle}>
                {children}
            </div>
            <div className={footerStyle}>
                <Footer />
            </div>
        </div>
    );
}
