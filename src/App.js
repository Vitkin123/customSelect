import './App.css';
import CustomSelect from "./components/Select/CustomSelect";


const props = {
    optionsList:
        [
            {label: 'option 1', value: 1},
            {label: 'option 2', value: 2},
            {label: 'option 3', value: 3},
            {label: 'option 4', value: 4}
        ],
    isMultiple: true,
    placeholder: 'No items selected',
    onSelectedLog: (items) => alert(JSON.stringify(items))
}

const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('Payload ', e);
}


function App() {
    return (
        <div className="App">
            <form className={'MainForm'} onSubmit={(e) => onFormSubmit(e)}>
                <label>Name <input type={"text"}/></label>
                <label>Email <input type={"text"}/></label>
                <CustomSelect {...props}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
