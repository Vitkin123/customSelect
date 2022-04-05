import {useState} from "react";
import './select.css';
import PropTypes from "prop-types";

const CustomSelect = ({optionsList, isMultiple, placeholder, onSelectedLog}) => {
    const [options, setOptions] = useState(optionsList);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState([]);

    const onCollapseClick = () => setIsCollapsed(prevState => !prevState);
    const selectContentClass = `SelectContent ${isCollapsed && 'collapsed'}`;
    const onDeselectAll = () => setSelected([]);
    const onSelectAll = () => setSelected(options);

    const onSortOptions = () => {
        const newOptions = [...options]
        newOptions.sort((a, b) => b.label.localeCompare(a.label));
        setOptions(newOptions);
    }
    const onItemSelect = (value) => {
        if (isMultiple) {
            if (selected?.includes(value)) {
                setSelected(prevState => {
                    return prevState.filter(option => option !== value);
                })
            } else {
                setSelected(prevState => {
                    const newState = [...prevState];
                    newState.push(value);
                    return newState;
                })
            }
        } else {
            const valueToSet = selected?.includes(value) ? [] : [value];
            setSelected(valueToSet)
        }
    };


    const selectContent = (
        <div className={selectContentClass}>
            {!selected?.length && <p className={'SelectPlaceholder'}>{placeholder}</p>}
            {options.map(option => {
                const isItemSelected = selected?.includes(option);
                return <div key={Math.random()}>
                    <label className={'SelectLabel'} htmlFor={option.label}>{option.label}</label>
                    <input
                        onChange={() => onItemSelect(option)}
                        checked={isItemSelected}
                        type={'checkbox'}
                        value={option.value}
                    />
                </div>
            })}
            <button className={'SelectButton'} onClick={onSortOptions}>Sort</button>
            {isMultiple && <div>
                <button className={'SelectButton'} onClick={onDeselectAll}>Deselect all</button>
                <button className={'SelectButton'} onClick={onSelectAll}>Select all</button>
            </div>}
            <button className={'SelectButton'} onClick={() => onSelectedLog(selected)}>Show selected</button>
        </div>
    )

    return (
        <div className={'SelectContainer'}>
            <p className={'SelectTitle'} onClick={onCollapseClick}>Title</p>
            {!isCollapsed && selectContent}
        </div>
    )
}


CustomSelect.propTypes = {
    optionsList: [{label: PropTypes.string, value: PropTypes.number}],
    isMultiple: PropTypes.bool,
    placeholder: PropTypes.string,
    onSelectedLog: PropTypes.func,
}
export default CustomSelect;