import { containerStyle, paragraphStyle, titleStyle } from './styles';
import Layout from '../../layouts/main';
import AnimateTextStagger from '@/components/animate-text-stagger';
import HyprBox from '@/components/hypr-box';

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <HyprBox>
                    <AnimateTextStagger>
                        <h2 className={titleStyle}>Welcome to my site!</h2>
                        <p className={paragraphStyle}>May the daftness be with you...</p>
                    </AnimateTextStagger>
                </HyprBox>
                <HyprBox>
                    <AnimateTextStagger>
                        <h2 className={titleStyle}>Welcome to my site!</h2>
                        <p className={paragraphStyle}>May the daftness be with you...</p>
                    </AnimateTextStagger>
                </HyprBox>
                <HyprBox>
                    <AnimateTextStagger>
                        <h2 className={titleStyle}>Welcome to my site!</h2>
                        <p className={paragraphStyle}>May the daftness be with you...</p>
                    </AnimateTextStagger>
                </HyprBox>
                <HyprBox>
                    <AnimateTextStagger>
                        <h2 className={titleStyle}>Welcome to my site!</h2>
                        <p className={paragraphStyle}>May the daftness be with you...</p>
                    </AnimateTextStagger>
                </HyprBox>
                <HyprBox>
                    <AnimateTextStagger>
                        <h2 className={titleStyle}>Welcome to my site!</h2>
                        <p className={paragraphStyle}>May the daftness be with you...</p>
                    </AnimateTextStagger>
                </HyprBox>
                <HyprBox>
                    <AnimateTextStagger>
                        <h2 className={titleStyle}>Welcome to my site!</h2>
                        <p className={paragraphStyle}>May the daftness be with you...</p>
                    </AnimateTextStagger>
                </HyprBox>


            </div>
        </Layout>
    );
};

