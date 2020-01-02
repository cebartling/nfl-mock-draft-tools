import React from 'react';
// import PropTypes from "prop-types";

const ErrorsWidget = () => {

    return (
        <div className="alert alert-danger mt-2">
            <strong>Damn!</strong> An error occurred.
        </div>
    );
};

ErrorsWidget.propTypes = {};

export default ErrorsWidget;
