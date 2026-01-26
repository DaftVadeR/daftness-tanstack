import AnimateTextStagger from "@/components/animate-text-stagger";
import HyprBox from "@/components/hypr-box";
import LinkSelector from "../link-selector";
import { paragraphStyle, smallParagraphStyle, titleStyle } from "../styles";
import clsx from "clsx";
import { links } from "..";
import { SPEED_SLOW } from "@/components/hypr-box/types";

export default function Intro() {
    return (
        <HyprBox
            showScroll
            nextId={links[0].href.substring(1)}
            // id={links[0].href.substring(1)}
            speed={SPEED_SLOW}
        >
            <AnimateTextStagger>
                <h2 className={titleStyle}>Welcome to my little corner of the Internet.</h2>

                <p className={clsx(smallParagraphStyle, 'text-purple-600')}>{`{/* I use Neovim & Hyprland btw. */}`}</p>

                <p className={paragraphStyle}>My name is Ross D, and I'm a Web/software developer based out of South Africa.</p>
            </AnimateTextStagger>
            <LinkSelector
                links={links}
            />

        </HyprBox>
    );
};
