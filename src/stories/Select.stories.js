import CustomSelect from "../components/Select/CustomSelect";

export default {
    title: 'Select',
    component: CustomSelect,
    argTypes: {handleClick: {action: 'Click on checkbox'}}
}

const Template = args => <CustomSelect {...args}/>

export const Select = Template.bind({});
Select.args = {
    optionsList:
        [
            {label: 'Option 1', value: 1},
            {label: 'Option 2', value: 2},
            {label: 'Option 3', value: 3},
            {label: 'Option 4', value: 4}
        ],
    placeholder: 'Custom placeholder',
    onSelectedLog: (items) => alert(JSON.stringify(items))
}
