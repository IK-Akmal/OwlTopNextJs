import type { GetStaticProps } from 'next';
import React from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';


const Search = (): JSX.Element => {
 

    return (
        <div>
            Search
        </div>
    );
};

export default withLayout(Search);

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