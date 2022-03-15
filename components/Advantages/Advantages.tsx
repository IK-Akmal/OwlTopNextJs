import React from 'react';
import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <div>
            {
                advantages.map(a => (
                    <div key={a._id} className={styles.advantages}>
                        <CheckIcon/>
                        <div className={styles.title}>{a.title}</div>
                        <hr className={styles.vline}/>
                        <div>{a.description}</div>
                    </div>
                ))
            }
        </div>
    );
};