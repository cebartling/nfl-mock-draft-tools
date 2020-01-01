import React from 'react';
import PropTypes from "prop-types";

const EnhancedButton = ({onClickHandler, buttonText, buttonClassName}) => {
    const buttonClassNameBase = buttonClassName ? buttonClassName : 'btn';

    const onClickHandlerBase = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        if (onClickHandler) {
            onClickHandler(evt);
        }
    };

    return (
        <button className={buttonClassNameBase} onClick={onClickHandlerBase}>{buttonText}</button>
    );
};

EnhancedButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    buttonClassName: PropTypes.string,
};


export default EnhancedButton;
