import Layout from '../../layouts/main';

import {
    containerStyle,
} from './styles';

import Intro from './intro';
import Tidbits from './tidbits';
import Proficiencies from './proficiencies';
import Brands from './brands';
import MatrixWithButton from './matrix-with-button';

export const links = [
    { href: '#about-me', label: 'About' },
    { href: '#languages-and-tools', label: 'Tools' },
    { href: '#work-experience', label: 'Work' },
];

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <Intro />
                <Tidbits />
                <Proficiencies />
                <Brands />
                <MatrixWithButton />
            </div>
        </Layout>
    );
};

