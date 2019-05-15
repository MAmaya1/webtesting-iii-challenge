// Test away
import React from 'react';
import Dashboard from '../dashboard/Dashboard';

import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';

describe('<Dashboard/>', () => {
    it('renders dashboard', () => {
        render(<Dashboard/>)
    })
})