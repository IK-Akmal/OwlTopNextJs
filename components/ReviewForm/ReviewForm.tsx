import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import CloseIcon from './close.svg';
import cn from 'classnames';

import { Rating, Input, Textarea, Button } from '..';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setErrorMessage] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
                ...formData,
                productId,
            });
            if (data) {
                setIsSuccess(true);
                reset();
            } else {
                setErrorMessage('Что-то пошло не так');
            }
        } catch (e:unknown) {
            if (e instanceof Error) {
                setErrorMessage(e.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className={cn(styles.reviewForm, className)}
                {...props}
            >
                <Input
                    {...register('name', { required: { value: true, message: "Заполните имя" } })}
                    placeholder="Имя"
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: "Заполните заголовок" } })}
                    className={styles.title}
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        rules={{ required: { value: true, message: "Укажите рейтинг" } }}
                        name="rating"
                        render={({ field }) => (
                            <Rating error={errors.rating} isEditable rating={field.value} setRating={field.onChange} />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: "Заполните описание" } })}
                    className={styles.description}
                    placeholder="Текст отзыва"
                    error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance={"primary"}>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверки.
                </div>
                <CloseIcon className={styles.close} onClick={()=>setIsSuccess(false)}/>
            </div>}
            {error && <div className={cn(styles.error, styles.panel)}>
                <div>
                    Что-то пошло не так, попробуйте обновить страницу.
                </div>
                <CloseIcon className={styles.close} onClick={()=>setErrorMessage(undefined)}/>
            </div>}
        </form>
    );
};