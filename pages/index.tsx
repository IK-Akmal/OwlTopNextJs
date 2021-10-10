import type { NextPage } from 'next';
import React from 'react';
import { Htag, Button } from '../components';


const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Привет</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
    </>
  );
};

export default Home;