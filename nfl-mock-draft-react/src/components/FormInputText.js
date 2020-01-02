import React from 'react';
import PropTypes from 'prop-types';

const FormInputText = ({name, value, labelText, inputHelpText, placeholderText, inputCssClassName, onChange}) => {
    const inputName = `${name}Input`;
    const inputHelpName = `${name}InputHelp`;
    const textFieldCssClassName = inputCssClassName ? inputCssClassName : 'col-sm-3';
    const inputValue = value ? value : '';

    return (
        <div className="form-group row">
            <label htmlFor={inputName}
                   className="col-sm-2 col-form-label text-right">{labelText}</label>
            <div className={textFieldCssClassName}>
                <input type="text"
                       className="form-control"
                       id={inputName}
                       aria-describedby={inputHelpName}
                       placeholder={placeholderText}
                       value={inputValue}
                       onChange={onChange}/>
                <small id={inputHelpName} className="form-text text-muted">{inputHelpText}</small>
            </div>
        </div>
    );
};

FormInputText.propTypes = {
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    inputHelpText: PropTypes.string,
    placeholderText: PropTypes.string,
    inputCssClassName: PropTypes.string,
};

export default FormInputText;
