import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../index';
import { CategoryList } from '../../store/model/category'
import { ItemList } from '../../store/model/item'


describe('Itemlist ', () => {
    it('should render search text', () => {
        const props = {
            categories: CategoryList.create(),
            items: ItemList.create(),
        }

        render(<Home {...props} />);
        expect(screen.getByRole('heading', { name: '出品' })).toBeInTheDocument();
    });

});