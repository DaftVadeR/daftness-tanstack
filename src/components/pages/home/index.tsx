import { containerStyle, paragraphStyle, titleStyle } from './styles';
import Layout from '../../layouts/main';
import AnimateText from '@/components/animate-text';

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <h2 className={titleStyle}><AnimateText>Welcome to my site!</AnimateText></h2>
                <p className={paragraphStyle}>This is my site! It's super daft!</p>
            </div>
        </Layout>
    );
};

