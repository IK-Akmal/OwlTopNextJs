import { SideBarProps } from './SideBar.Props';
import { Menu } from '../Menu/Menu';
import LogoIcon from '../logo.svg';
import cn from 'classnames';
import styles from './SideBar.module.css';
import { Search } from '../../components';

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {

    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <LogoIcon className={styles.logo} />
            <Search />
            <Menu />
        </aside>
    );
};