import React from 'react';

const OVERVIEW_TIPS = [
    'This repo will be used to save your progress in the resolution of the proposed exercises',
    'The proposed exercise are in order and should be followed in that way',
    'Please append every single exercise according to the guide instruction',
];

const Overview = () => (
    <section className="eds-best-practices eds-l-mar-vert-10" data-spec="eds-best-practices">
        <h1 className="eds-text-hm eds-l-pad-bot-6">Checklist</h1>
        <ul className="eds-text-bm eds-text-height--open eds-l-pad-left-4">
            {OVERVIEW_TIPS.map((item) => <li className="eds-l-pad-bot-2" key={item}>{item}</li>)}
        </ul>
    </section>
);
export default Overview;