// Test away!
import React from 'react';
import Controls from '../controls/Controls';

import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';

describe('<Controls/>', () => {
    it('renders controls', () => {
        render(<Controls/>)
    })
})