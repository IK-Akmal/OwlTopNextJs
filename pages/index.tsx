import type { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Input } from '../components/Input/Input';
import { API } from '../helpers/api';


const Home = ({ menu }: IHomeProps): JSX.Element => {
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
      <Input placeholder="Test"/>
      <Textarea placeholder="Test"/>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}