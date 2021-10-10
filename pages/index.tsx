import type { NextPage } from 'next';
import React from 'react';
import { Htag, Button, Paragraph, Tag } from '../components';


const Home: NextPage = () => {
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
    </>
  );
};

export default Home;