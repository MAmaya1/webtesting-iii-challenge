// Test away!
import React from 'react';
import Display from '../display/Display';

import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';

describe('<Display/>', () => {
    it('renders display', () => {
        render(<Display/>)
    })
})