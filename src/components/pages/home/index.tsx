import { containerStyle, paragraphStyle, titleStyle } from './styles';
import Layout from '../../layouts/main';
// import AnimateTextGsapSimple from '@/components/animate-text-gsap';
import AnimateTextGsapSimple from '@/components/animate-text-stagger';

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <h2 className={titleStyle}><AnimateTextGsapSimple>Welcome to my site!</AnimateTextGsapSimple></h2>
                <p className={paragraphStyle}>This is my site! It's super daft!</p>
            </div>
        </Layout>
    );
};

