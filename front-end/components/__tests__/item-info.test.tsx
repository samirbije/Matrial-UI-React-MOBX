import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemInformation from '../item-info';

const test = [{
    id: '1',
    name: 'test',
    image: 'test',
    price: 100,
    like_count: 200,
    description: 'test',
    shipping_fee: '100',
    is_sold_out: false,
    category_id: 1,
    comment_count: 1
}];

describe('Itemlist ', () => {
    it('should render test in header', () => {

        render(<ItemInformation itemList={test} />);
        expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
    });

});