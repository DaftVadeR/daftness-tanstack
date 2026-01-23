import Layout from '../../layouts/main';

import {
    containerStyle,
} from './styles';

import Proficiencies from './proficiencies';
import Tidbits from './tidbits';
import Intro from './intro';
import MatrixWithButton from './matrix-with-button';

export const links = [
    { href: '#about-me', label: 'About Me' },
    { href: '#languages-and-tools', label: 'What I Use' },
];

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <Intro />
                <Tidbits />
                <Proficiencies />
                <MatrixWithButton />
            </div>
        </Layout>
    );
};

