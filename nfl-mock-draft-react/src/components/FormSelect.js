import React from 'react';
import PropTypes from "prop-types";
import {map} from 'lodash';

const FormSelect = ({name, labelText, value, valueLabelMaps, inputHelpText, inputCssClassName, onChange}) => {
    const inputName = `${name}Input`;
    const inputHelpName = `${name}InputHelp`;
    const selectFieldCssClassName = inputCssClassName ? inputCssClassName : 'col-sm-3';
    const inputValue = value ? value : '';

    const renderOptions = () => {
        return map(valueLabelMaps, x => (<option value={x.value} key={x.value}>{x.label}</option>));
    };

    return (
        <div className="form-group row">
            <label htmlFor={inputName}
                   className="col-sm-2 col-form-label text-right">{labelText}</label>
            <div className={selectFieldCssClassName}>
                <select className="form-control"
                        id={inputName}
                        aria-describedby={inputHelpName}
                        value={inputValue}
                        onChange={onChange}>
                    {renderOptions()}
                </select>
                <small id={inputHelpName} className="form-text text-muted">{inputHelpText}</small>
            </div>
        </div>
    );
};

FormSelect.propTypes = {
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    valueLabelMaps: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string,
    inputHelpText: PropTypes.string,
    inputCssClassName: PropTypes.string,
};

export default FormSelect;
