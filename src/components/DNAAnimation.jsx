import React from 'react';
import '../DNAAnimation.css';

const DNAAnimation = () => {
    const segments = Array.from({ length: 60 });
    const rotateDelay = 0.15; // seconds

    return (
        <div id="dna">
            {segments.map((_, index) => {
                const delay = (index * rotateDelay - 9).toFixed(2); // 60 in tenths = 6 seconds

                return (
                    <div
                        key={index}
                        className="dna-segment"
                        style={{
                            animationDelay: `${delay}s`,
                            '--delay': `${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default DNAAnimation;
