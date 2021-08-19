import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDetail from '../item-detail';

const props = {
    name: 'test',
    image: 'test1',
    price: 1000,
    like_count: 200,
    description: 'test3',
    shipping_fee: 100,
};

describe('ItemDetail ', () => {
    it('should render 購入手続きヘ text', () => {

        render(<ItemDetail itemsDetails={props} />);
        expect(screen.getByText('購入手続きヘ')).toBeInTheDocument();
    });

});