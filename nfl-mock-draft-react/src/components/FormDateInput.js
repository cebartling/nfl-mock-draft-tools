import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';

const FormDateInput = ({name, value, labelText, inputHelpText, placeholderText, inputCssClassName, onChange}) => {
    const inputName = `${name}Input`;
    const inputHelpName = `${name}InputHelp`;
    const textFieldCssClassName = inputCssClassName ? inputCssClassName : 'col-sm-2';
    // const inputValue = value ? value : '';

    return (
        <div className="form-group row">
            <label htmlFor={inputName}
                   className="col-sm-2 col-form-label text-right">{labelText}</label>
            <div className={textFieldCssClassName}>
                <Datetime timeFormat={false}
                          dateFormat={'MMMM DD, YYYY'}
                          defaultValue={moment(value)}
                          onChange={onChange}
                          closeOnSelect={true}
                          closeOnTab={true}/>
                <small id={inputHelpName} className="form-text text-muted">{inputHelpText}</small>
            </div>
        </div>
    );
};

FormDateInput.propTypes = {
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    inputHelpText: PropTypes.string,
    placeholderText: PropTypes.string,
    inputCssClassName: PropTypes.string,
};

export default FormDateInput;
