import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';



const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag="h1">Привет</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <Paragraph size="s">Маленький</Paragraph>
      <Paragraph >Средний</Paragraph>
      <Paragraph size="l">Большой</Paragraph>
      <Tag>ghost</Tag>
      <Tag color="red">Red</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);