import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useState } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {

    const [rataingArray, setRataingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructorRating = (current: number) => {
        const updateArray = rataingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon />
            );
        });
    };

    return (
        <div {...props}>

        </div>
    );
};