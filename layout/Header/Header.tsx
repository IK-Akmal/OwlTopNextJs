import {HeaderProps } from './Header.Props';


export const Header = ({ ...props }: HeaderProps): JSX.Element => {

    return (
        <header {...props}>
            Header
        </header>
    );
};