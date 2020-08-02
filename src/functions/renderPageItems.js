import React from 'react';

export const renderPageItems = (itemArr, itemDisplayEdit, edit) => {
    return itemArr.map(item => itemDisplayEdit(item, edit))
}

// export default renderPageItems