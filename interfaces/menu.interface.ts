import { TopLevelCategory } from "./page.interface";

export interface IPageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: IPageItem[];
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}