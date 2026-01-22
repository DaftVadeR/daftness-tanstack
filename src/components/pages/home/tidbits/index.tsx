import HyprBox from "@/components/hypr-box";
import { paragraphStyle, splitterStyle, subTitleStyle } from "../styles";
import AnimateTextStagger from "@/components/animate-text-stagger";
import { Keyboard, SquareCode } from "lucide-react";
import { links } from "..";

export default function Tidbits() {
    return (
        <div
            className={splitterStyle}
            id={links[0].href.substring(1)}
        >
            <HyprBox
                size='md'
                active1='rgba(190, 80, 30,0.8)'
                active2='rgba(200, 0, 40, 0.8)'
                className='flex-1'
            >
                <AnimateTextStagger
                    prependIcon={
                        <Keyboard
                            size={42}
                            color={'rgba(80, 40, 120, 0.8)'}
                        />
                    }
                >
                    <h3 className={subTitleStyle}>
                        My name is <strong>Ross</strong>, and I build things.
                    </h3>
                    <p className={paragraphStyle}>I have been a Web developer for 16+ years, and been heavily involved in both back-end and front-end-related aspects of software and Web projects.</p>
                    <p className={paragraphStyle}>I've built apps, games, Websites, bespoke CMSes and CRMs, and a lot more.</p>
                </AnimateTextStagger>
            </HyprBox>
            <HyprBox
                size='md'
                className='flex-1'
                active1='rgba(30, 190, 30,0.8)'
                active2='rgba(0, 30, 190, 0.8)'
            >
                <AnimateTextStagger
                    prependIcon={
                        <SquareCode size={42}
                            color={'rgba(200, 120, 50, 0.8)'}
                        />
                    }
                >
                    <h3 className={subTitleStyle}>I enjoy learning programming languages.</h3>
                    <p className={paragraphStyle}>I've learnt a number of languages, frameworks, CMSes, and program design paradigms. I've been heavily focused on higher level langauges and Web technologies for most of my career, but am investing time into learning lower level languages and their associated concepts, such as memory management, sorting algorithms, and data structures.</p>
                </AnimateTextStagger>
            </HyprBox>
        </div>
    );
};


