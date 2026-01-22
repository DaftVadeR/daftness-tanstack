import { containerStyle, paragraphStyle, titleStyle, splitterStyle, subTitleStyle, smallTitleStyle, proficienciesStyle, logoStyle, logoListItemStyle, logoListStyle } from './styles';

import Layout from '../../layouts/main';
import AnimateTextStagger from '@/components/animate-text-stagger';
import HyprBox from '@/components/hypr-box';

import { Keyboard, SquareCode } from 'lucide-react';
import clsx from 'clsx';

const Intro = () => {
    return (
        <HyprBox>
            <AnimateTextStagger>
                <h2 className={titleStyle}>Welcome to my site!</h2>
                <p className={paragraphStyle}>May the daftness be with you...</p>
            </AnimateTextStagger>
        </HyprBox>
    );
};

type Logo = {
    name: string,
    filename: string,
};

const proficientLogos: Logo[] = [
    { name: 'JavaScript', filename: 'javascript.png' },
    { name: 'Typescript', filename: 'typescript.png' },
    { name: 'PHP', filename: 'php.svg' },
    { name: 'NextJS', filename: 'nextjs.svg' },
    { name: 'ReactJS', filename: 'react.svg' },
    { name: 'NodeJS', filename: 'nodejs.svg' },
    { name: 'Prisma', filename: 'prisma.svg' },
    { name: 'Laravel', filename: 'laravel.png' },
    { name: 'Neovim', filename: 'neovim.png' },
    { name: 'Tmux', filename: 'tmux.png' },
];

const capableLogos: Logo[] = [
    { name: 'NestJS', filename: 'nestjs.svg' },
    { name: 'Heroku', filename: 'heroku.png' },
    { name: 'Tailwind', filename: 'tailwind.svg' },
    { name: 'Dokploy', filename: 'dokploy.svg' },
    { name: 'Golang', filename: 'golang.png' },
    { name: 'Material UI', filename: 'material-ui.svg' },
    { name: 'Emotion CSS', filename: 'emotion.svg' },
    { name: 'Styled Components CSS', filename: 'styled-components.png' },
    { name: 'Bevy', filename: 'bevy.svg' },
    { name: 'Fedora', filename: 'fedora.png' },
    { name: 'ChatGPT', filename: 'chatgpt.png' },
    { name: 'Postgres', filename: 'postgres.webp' },
    { name: 'MySQL', filename: 'mysql.svg' },
];

const beginnersLogos: Logo[] = [
    { name: 'Rust', filename: 'rust.png' },
    { name: 'Tanstack', filename: 'tanstack.svg' },
    { name: 'Zod', filename: 'zod.png' },
    { name: 'Zig', filename: 'zig.png' },
    { name: 'C#', filename: 'csharp.svg' },
    { name: 'Raylib', filename: 'raylib.png' },
    { name: 'Monogame', filename: 'monogame.svg' },
    { name: 'Opencode', filename: 'opencode.svg' },
];

const Tidbits = () => {
    return (
        <div className={splitterStyle}>
            <HyprBox
                size='md'
                active1='rgba(190, 80, 30,0.8)'
                active2='rgba(200, 0, 40, 0.8)'
                className='flex-1'
            >
                <AnimateTextStagger prependIcon={<Keyboard size={40} color={'rgba(80, 40, 120, 0.8)'} />}>
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
            >
                <AnimateTextStagger prependIcon={<SquareCode size={40} color={'rgba(200, 120, 50, 0.8)'} />}>
                    <h3 className={subTitleStyle}>I enjoy learning programming languages.</h3>
                    <p className={paragraphStyle}>I've learnt a number of languages, frameworks, CMSes, and program design paradigms. I've been heavily focused on higher level langauges and Web technologies for most of my career, but am investing time into learning lower level languages and their associated concepts, such as memory management, sorting algorithms, and data structures.</p>
                </AnimateTextStagger>
            </HyprBox>
        </div>
    );
};

const LogoList = ({ logos }: { logos: Logo[] }) => {
    return (
        <ul className={logoListStyle}>
            {logos.map((logo, index) => (
                <li key={index} className={clsx(logoListItemStyle)}>
                    <img
                        width={48}
                        height={48}
                        alt={logo.name}
                        className={logoStyle}
                        src={`/logos/${logo.filename}`}
                        aria-label={logo.name}
                    />
                </li>
            ))}
        </ul>
    );
};

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <Intro />
                <Tidbits />

                <HyprBox className={proficienciesStyle} size='lg'>
                    <AnimateTextStagger>
                        <h3 className={subTitleStyle}>Languages, tools, and other things.</h3>
                        <h4 className={smallTitleStyle}>Proficient in:</h4>
                    </AnimateTextStagger>

                    <LogoList logos={proficientLogos} />

                    <AnimateTextStagger>
                        <h4 className={smallTitleStyle}>Capable with:</h4>
                    </AnimateTextStagger>

                    <LogoList logos={capableLogos} />

                    <AnimateTextStagger>
                        <h4 className={smallTitleStyle}>Beginning in:</h4>
                    </AnimateTextStagger>

                    <LogoList logos={beginnersLogos} />
                </HyprBox>

            </div>
        </Layout>
    );
};

