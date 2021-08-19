import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../search';

describe('Search ', () => {
    it('should render button without error', () => {
        render(<Search />);
        expect(screen.getByRole('button', { name: 'search' })).toBeInTheDocument();
    });

});