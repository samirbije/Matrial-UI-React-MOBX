import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDetails from '../[itemId]';

describe('ItemDetails ', () => {
    it('should render 商品の説明 when there is not item id', () => {
        render(<ItemDetails />)
        expect(screen.queryByText('submit')).not.toBeInTheDocument();
    });

});