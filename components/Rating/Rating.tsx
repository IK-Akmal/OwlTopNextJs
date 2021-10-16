import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useState, useEffect, KeyboardEvent } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {

    const [rataingArray, setRataingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructorRating(rating);
        console.log("change");

    }, [rating]);

    const constructorRating = (currentRating: number) => {
        const updateArray = rataingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDispay(i + 1)}
                    onMouseLeave={() => changeDispay(rating)}
                    onClick={() => changeRating(i + 1)}
                >
                    <StarIcon

                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });

        setRataingArray(updateArray);
    };

    const changeDispay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructorRating(i);
    };

    const changeRating = (i: number) => {

        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };


    return (
        <div {...props}>
            {
                rataingArray.map((r, i) => (
                    <span key={i}>{r}</span>
                ))
            }
        </div>
    );
};