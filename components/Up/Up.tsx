import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScrollY } from '../../Hooks/useScrollY';
import styles from './Up.module.css';
import UpIcon from './up.svg';

export const Up = (): JSX.Element => {

    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight, visibility: y> 200 ? 'visible' : 'hidden'});
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <motion.button
            className={styles.up}
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0, visibility:'hidden'}}
        >
            <UpIcon />
        </motion.button>
    );
};