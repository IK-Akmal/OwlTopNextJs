import { SideBarProps } from './SideBar.Props';
import styles from './SideBar.module.css';

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {

    return (
        <aside {...props}>
            SideBar
        </aside>
    );
};