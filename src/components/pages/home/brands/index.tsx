import HyprBox from "@/components/hypr-box";
import { links } from "..";
import { subTitleStyle } from "../styles";
import { containerStyle } from "./styles";
import AnimateTextStagger from "@/components/animate-text-stagger";
import { Pen } from "lucide-react";
import LogoList from "@/components/logo-list";
import { SPEED_FAST, SPEED_MID } from "@/components/animate-text-stagger/types";

const logos = [
    {
        name: 'Samsung',
        filename: 'samsung.png',
    },
    {
        name: 'HIVSA',
        filename: 'hivsa.png',
    },
    {
        name: 'SAB',
        filename: 'sab.png',
    },
    {
        name: 'Dis-Chem',
        filename: 'dischem.png',
    },
    {
        name: 'Tiger Brands',
        filename: 'tigerbrands.png',
    },
    {
        name: 'Standard Bank',
        filename: 'stdbank.png',
    },
    {
        name: 'SIOPSA',
        filename: 'siopsa.png',
    },
    {
        name: 'All Life',
        filename: 'alllife.png',
    },
    {
        name: 'Choma',
        filename: 'choma.png',
    },
];

export default function Brands() {
    console.log('brands', logos);

    return (
        <div
            className={containerStyle}
            id={links[2].href.substring(1)}
        >
            <HyprBox
                active1='rgba(190, 80, 30, 1)'
                active2='rgba(200, 0, 40, 1)'
                className='flex-1'
            >
                <AnimateTextStagger
                    prependIcon={
                        <Pen
                            size={42}
                            color={'rgba(80, 40, 120, 1)'}
                        />
                    }
                >
                    <h3 className={subTitleStyle}>
                        I've worked with many brands
                    </h3>
                </AnimateTextStagger>

                <LogoList
                    logos={logos}
                />
            </HyprBox>
        </div>
    );
};


