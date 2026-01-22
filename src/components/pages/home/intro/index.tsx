import AnimateTextStagger from "@/components/animate-text-stagger";
import HyprBox from "@/components/hypr-box";
import LinkSelector from "../link-selector";
import { paragraphStyle, titleStyle } from "../styles";
import clsx from "clsx";
import { links } from "..";

export default function Intro() {
    return (
        <HyprBox
            showScroll
            nextId={links[0].href.substring(1)}
            // id={links[0].href.substring(1)}
            speed='sm'
        >
            <AnimateTextStagger
                speed="lg"
            >
                <h2 className={titleStyle}>Welcome to my little corner of the Internet.</h2>

                <p className={clsx(paragraphStyle, 'text-purple-600')}>{`{/* I use Neovim & Hyprland btw. */}`}</p>

                <p className={paragraphStyle}>My name is Ross D, and I'm a web/software developer based out of South Africa.</p>
            </AnimateTextStagger>
            <LinkSelector
                links={links}
            />

        </HyprBox>
    );
};
