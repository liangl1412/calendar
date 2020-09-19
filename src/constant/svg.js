import * as React from 'react';

const SVG = {
    CHEVRON_RIGHT: {
        viewBox: '0 0 7.7 12',
        data: <path fill="currentColor" d="M1.7 0L0 1.7 4.3 6 0 10.3 1.7 12l6-6z" />,
    },
    CHEVRON_LEFT: {
        viewBox: '0 0 7.7 12',
        data: (
            <path
                fill="currentColor"
                d="M1.7 0L0 1.7 4.3 6 0 10.3 1.7 12l6-6z"
                style={{transform: 'rotate(180deg)', transformOrigin: '50%'}}
            />
        ),
    },
    CLOSE: {
        viewBox: '0 0 14 14',
        data: (
            <path
                d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"
                fill="currentColor"
                fillRule="nonzero"
            />
        ),
    },
}

export default SVG;
