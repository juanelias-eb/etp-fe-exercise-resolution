import React from 'react';

import EditListItem from 'eventbrite_design_system/editListItem/EditListItem';

const BreweryTableHeader = () => (
    <EditListItem
        __containerClassName="eds-g-group eds-bg-color--grey-100 eds-l-pad-hor-6 eds-l-pad-vert-4"
        content={
            <span className="eds-text-bm eds-text-weight--heavy">
                Brewery
            </span>
        }
        actionItems={[]}
        noWrap={true}
    >
    </EditListItem>
);

export default BreweryTableHeader;
