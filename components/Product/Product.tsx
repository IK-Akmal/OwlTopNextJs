import React, { forwardRef, ForwardedRef, Fragment, useRef, useState } from 'react';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '..';
import cn from 'classnames';
import { declOfNum, priceRu } from '../../helpers/helpers';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: { opacity: 1, height: 'auto' },
        hidden: { opacity: 1, height: 0 },
    };

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70} />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{priceRu(product.credit)}/<span className={styles.month}>мес</span></div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c} color="ghost">{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}><span onClick={scrollToReview}>{product.reviewCount}  {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</span></div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {
                        product.characteristics.map(c => (
                            <div className={styles.characteristics} key={c.name}>
                                <span className={styles.characteristicsName}>{c.name}</span>
                                <span className={styles.characteristicsDots}></span>
                                <span className={styles.characteristicsValue}>{c.value}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.advBlock}>
                    {
                        product.advantages && <div className={styles.advantages}>
                            <div className={styles.advTitle}>Преимущества</div>
                            <div>{product.advantages}</div>
                        </div>
                    }
                    {
                        product.disadvantages && <div className={styles.disadvantages}>
                            <div className={styles.advTitle}>Недостаток</div>
                            <div>{product.disadvantages}</div>
                        </div>
                    }

                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button appearance="primary">Узнать подробное</Button>
                    <Button
                        appearance="ghost"
                        arrow={isReviewOpened ? "down" : "right"}
                        className={styles.reviewButton}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <Card ref={reviewRef} color="blue" className={cn(styles.reviews, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,
            })}>
                {product.reviews.map(r => (
                    <Fragment key={r._id}>
                        <Review review={r} />
                        <Divider />
                    </Fragment>
                ))}
                <ReviewForm productId={product._id} />
            </Card>
        </div>
    );
}));