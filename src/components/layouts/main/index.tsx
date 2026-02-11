import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Circles from "./circles";

import { containerStyle, contentStyle, headerStyle, footerStyle, layoutContentWrapperStyle } from './styles';
import { useEffect, useRef, useState } from "react";
import { useResizePause } from "@/components/ui/use-resize-pause";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const layoutRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState([0, 0]);

    const isResizing = useResizePause(layoutRef);

    useEffect(() => {
        const isClient = typeof window !== undefined;

        if (isClient) {
            setSize([window.innerWidth, window.innerHeight]);
        }
    }, [isResizing]);

    const canWorkAndFitViewFrame = size[1] > 0 && size[0] > 800;

    return (
        <div className={containerStyle} ref={layoutRef}>
            <div className={layoutContentWrapperStyle}>
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
            {canWorkAndFitViewFrame &&
                <Circles />}
        </div>
    );
}
