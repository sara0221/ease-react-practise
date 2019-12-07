import {useState, useRef, useEffect} from 'react'

function InputNumber (props) {
  const isNotControl = typeof props.value === 'undefined';
  const inputValue = isNotControl ? props.defaultValue : props.value;
  const [value, setValue] = useState(inputValue);
  const inputEl = useRef(null);

  const handleChange = (e) => {
    let value = e.target.value
    if (isNotControl) {
      value = inputEl.current.value
    }
    setValue(value)
    let event = props.onChange
    event ? event(value) : () => {}
  }

  useEffect(()=>{
    // 外层 props 变化的时候，更新 value
    const newValue = props.value
    if (value != newValue) {
      setValue(newValue)
    }
  })

  return (
    <div>
      <input ref={inputEl} type="text" value={value} onChange={handleChange} />
    </div>
  )
}

function App() {
  const default_value = 'aaa'
  const [value, setValue] = useState(default_value);
  
  const handleClick = e => {
    setValue(default_value)
  };
  
  const handleChange = value => {
    setValue(value)
    console.log(value)
  }

  const handleChangeNotControl = value => {
    console.log(value)
  }

  return (
    <div>
      <InputNumber value={value} onChange={handleChange} />
      <InputNumber defaultValue="default" onChange={handleChangeNotControl}/>
      <button onClick={handleClick}>重置value</button>
    </div>
  )
}

export default function() {
  return (
    <div>
      <App />
    </div>
  );
}
