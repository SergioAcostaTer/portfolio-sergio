import React, { useEffect } from 'react';

const RandomPlacer = ({ size = 500 }) => {
    const imageSize = size;

    const outRatio = 3
    const outRatioY = 1.5

    let positions = Math.random() > 0.5 ? [
        { top: -100 * outRatioY, left: -imageSize / outRatio }, // Top-left
        { bottom: -100 * outRatioY, right: -imageSize / outRatio }, // Bottom-right
    ]
        :
        [
            { top: -100 * outRatioY, right: -imageSize / outRatio }, // Top-right
            { bottom: -100 * outRatioY, left: -imageSize / outRatio }, // Bottom-left
        ];


    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {positions.map((position, index) => (
                    <img
                        key={index}
                        src='./blue-purple-1.svg'
                        alt="background"
                        className="noselect blur3"
                        style={{
                            position: 'absolute',
                            width: imageSize,
                            height: imageSize,
                            ...position,
                            opacity: 0.8
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default RandomPlacer;
