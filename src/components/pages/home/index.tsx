import { containerStyle, paragraphStyle, titleStyle } from './styles';
import Layout from '../../layouts/main';

export default function Home() {
    return (
        <Layout>
            <div className={containerStyle}>
                <h1 className={titleStyle}>Welcome to my site.</h1>
                <p className={paragraphStyle}>This is my site! It's super daft!</p>
            </div>
        </Layout>
    );
}
