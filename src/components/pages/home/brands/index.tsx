import HyprBox from "@/components/hypr-box";
import { links } from "..";
import { containerStyle, subTitleStyle } from "../styles";
import AnimateTextStagger from "@/components/animate-text-stagger";
import { Pen } from "lucide-react";
import LogoList from "@/components/logo-list";

export default function Brands() {
    return (
        <div
            className={containerStyle}
            id={links[2].href.substring(1)}
        >
            <HyprBox
                active1='rgba(190, 80, 30,0.8)'
                active2='rgba(200, 0, 40, 0.8)'
                className='flex-1'
            >
                <AnimateTextStagger
                    prependIcon={
                        <Pen
                            size={42}
                            color={'rgba(80, 40, 120, 0.8)'}
                        />
                    }
                >
                    <h3 className={subTitleStyle}>
                        I've worked with many brands
                    </h3>
                    <LogoList logos={[
                        {
                            name: 'Test',
                            filename: 'test.svg',
                        },
                    ]} />
                </AnimateTextStagger>
            </HyprBox>
        </div>
    );
};


