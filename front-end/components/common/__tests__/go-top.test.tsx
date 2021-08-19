import React from 'react';
import { render, screen } from '@testing-library/react';
import GoTop from '../go-top';


describe('GoTop ', () => {
    it('should render button', () => {
        render(<GoTop isCorrectLocation={true} />);
        expect(screen.getByRole('button', { name: '新しい商品' })).toBeInTheDocument();
    });

});