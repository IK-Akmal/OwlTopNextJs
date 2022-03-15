import { LayoutProps } from './Layout.Props';
import { Header } from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';

import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';

const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <SideBar className={styles.sidebar} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer} />
            <Up />
        </div>
    );
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function (props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};