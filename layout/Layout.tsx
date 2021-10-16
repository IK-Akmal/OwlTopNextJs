import { LayoutProps } from './Layout.Props';
import styles from './Layout.module.css';

import { Header } from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';
 
const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <>
            <Header />
            <main>
                <SideBar />
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function (props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};