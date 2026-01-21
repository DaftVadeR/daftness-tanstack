import { containerStyle, paragraphStyle, titleStyle } from '../home/styles';

import Layout from '../../layouts/main';
import AnimateTextStagger from '@/components/animate-text-stagger';
import AnimateTextGsap from '@/components/animate-text-gsap';
import AnimateText from '@/components/animate-text';

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <AnimateTextStagger>
                    <h2 className={titleStyle}>Welcome to my site!</h2>
                    <p className={paragraphStyle}>May the daftness be with you...</p>
                </AnimateTextStagger>

                <h2 className={titleStyle}>
                    <AnimateTextGsap >
                        Welcome to my site!
                    </AnimateTextGsap>
                </h2>

                <p className={paragraphStyle}>
                    <AnimateTextGsap>
                        May the daftness be with you...
                    </AnimateTextGsap>
                </p>

                <h2 className={titleStyle}>
                    <AnimateText>

                        Welcome to my site!
                    </AnimateText>
                </h2>
                <p>
                    <AnimateText>
                        May the daftness be with you...
                    </AnimateText>
                </p>
            </div>
        </Layout>
    );
};

