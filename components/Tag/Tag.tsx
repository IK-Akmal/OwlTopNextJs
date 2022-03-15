import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({ size = "s", color = "ghost", children, href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.ghost]: color == 'ghost',
                [styles.grey]: color == 'grey',
                [styles.red]: color == 'red',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',


            })}
            {...props}
        >
            {
                href != undefined
                    ?
                    <a href={href}> {children}</a>
                    :
                    <> {children}</>

            }
        </div>
    );
};