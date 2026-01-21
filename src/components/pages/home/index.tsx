import { containerStyle, paragraphStyle, titleStyle } from './styles';
import Layout from '../../layouts/main';
import AnimateTextStagger from '@/components/animate-text-stagger';

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <AnimateTextStagger>
                    <h2 className={titleStyle}>Welcome to my site!</h2>
                    <p className={paragraphStyle}>May the daftness be with you...</p>
                </AnimateTextStagger>
            </div>
        </Layout>
    );
};

