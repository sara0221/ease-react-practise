
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  async componentDidMount() {
    let res = await confirm('确定删除么');
    console.log(res? '是' : '否')
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

function confirm(msg){
  return new Promise((resolve)=>{
    let dom = document.createElement('div')
    
    const handleCancel = ()=>{
      resolve(false)            
      ReactDOM.unmountComponentAtNode(dom);
    }

    const handleSuccess = ()=>{
      resolve(true)
      ReactDOM.unmountComponentAtNode(dom);
    }

    let confirmDom = (
      <div>
        { msg }
        <div>
          <button onClick={ handleCancel }>取消</button>
          <button onClick={ handleSuccess }>确定</button>
        </div>
      </div>
    )
    document.body.appendChild(dom)
    ReactDOM.render(confirmDom, dom);       
      // resolve(true); //到底要不要判断这个组件是否加载完成？？？ 
  })
}


export default function() {
  return (
    <div>
      <App />
    </div>
  );
}
