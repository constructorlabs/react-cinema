import React from 'react';

function BackToTop() {
    function handleBackToTop() {
        window.scrollTo(0, 0);
    };
    return (
        <button onClick={handleBackToTop} title="Back To Top" id="back-to-top" className="back-to-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
            </svg>
        </button>
    )
}

export default BackToTop;