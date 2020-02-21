import React from 'react';

export const assembleComponentWithFocusDrawer = (
    focusDrawerTitle,
    focusDrawerContent,
    children,
) => ({
    mainContent: children,
    focusDrawerContent,
    focusDrawerTitle: () => (
        <span className="eds-text-bl">{focusDrawerTitle || 'Sample title'}</span>
    )
});
