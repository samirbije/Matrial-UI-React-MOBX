import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoryList } from '../category';

const test = {
    id: '',
    name: '',
    description: '',
    like_count: 0,
    comment_count: 0,
    price: 0,
    is_sold_out: false,
    shipping_fee: '',
    image: '',
    category_id: 0,
};


describe('CategoryList Model ', () => {
    it('should create', () => {
        const categoryListModel = CategoryList.create({})
        expect(categoryListModel.categoryList.length).toBe(0)

    });

});