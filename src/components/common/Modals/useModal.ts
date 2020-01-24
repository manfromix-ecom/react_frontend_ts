import React, { useState } from 'react';

export const useModal = (isInitialShown = false) => {
    const [isModalShown, setModalView] = useState(isInitialShown);

    function toggleModal(open=!isModalShown) {
        setModalView(open);
    }
    return {
        isModalShown,
        toggleModal
    }
};