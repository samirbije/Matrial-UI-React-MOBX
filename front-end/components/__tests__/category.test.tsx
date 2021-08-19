import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from '../category';

const categoryProps =
{
    categoryList: [{
        id: '1',
        name: 'test123',
    }],
    activeCategoryId: 0,
    onChangeCategoryTab: () => { }
};

describe('Category ', () => {
    it('should render test123 as category', () => {

        render(<Category {...categoryProps} />);
        expect(screen.getByText('test123')).toBeInTheDocument();
    });

});