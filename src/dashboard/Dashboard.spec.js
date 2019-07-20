// Test away
import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import Controls from '../controls/Controls';

import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';

describe('<Dashboard/>', () => {
    it('renders dashboard', () => {
        render(<Dashboard/>)
    })

    describe('toggleClosed()', () => {
        it('should close the gate', () => {
            const spy = jest.fn();
            const { getByText } = render(<Controls toggleClosed={spy}/>)
            const button = getByText(/close gate/i)

            fireEvent.click(button);

            expect(spy).toHaveBeenCalledTimes(1);
        })
    })

    describe('toggleLocked()', () => {
        it('should lock the gate', () => {
            const spy = jest.fn();

            const { getByText } = render(<Controls toggleLocked={spy} toggleClosed={spy}/>)
            const closeBtn = getByText(/close gate/i)

            fireEvent.click(closeBtn);
    
            const lockBtn = getByText(/lock gate/i);
            fireEvent.click(lockBtn);
            expect(spy).toHaveBeenCalledTimes(1);
        })
    })
})