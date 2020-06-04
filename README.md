This project is a demo for the npm package `react-code-box` https://www.npmjs.com/package/react-code-box 


## Demo
https://github.com/borisdedejski/react-code-box-demo
## Installation
With Yarn:
`yarn add react-code-box`
With npm:
`npm install react-code-box`

## Usage
You can override classes and styles on the CodeBox via its props `style` and `className`.

Props that CodeBox receives are: 
 `variant: "dark" | "light";
  title: string;
  code: string;
  style?: CSSProperties;
  className?: string;
  id: string;`

It comes in two variants, it can rather be dark or light. 

## Example
```
import React from "react";
import CodeBox from "react-code-box/dist/index";

const TodoApp = () => {

  let code = `
  class TodoList extends Component {
      state = { todos: [], text: '' };
      updateText = e => {
          this.setState({ text: e.target.value });
      };
      addItem = () => {
          let { todos, text } = this.state;
          todos = todos.concat({ text });
          this.setState({ todos, text: '' });
      };
      render({ }, { todos, text }) {
          return (
              <div>
                  <form onSubmit={this.addItem} action="javascript:">
                      <input value={text} onInput={this.updateText} />
                      <input type="submit" value="Add" />
                  </form>
                  <ul>
                      { todos.map( todo => (
                          <li>{todo.text}</li>
                      )) }
                  </ul>
              </div>
          );
      }
  }
  
  render(<TodoList />);


  return (
      <CodeBox
        title="~code-box-dark.js"
        variant="dark"
        code={code}
        id="code-box-dark"
        style={{marginTop:'200px'}}
      />
  );
};

export default TodoApp;
```

### Test
1. Clone the repo
`git clone https://github.com/borisdedejski/react-code-box-demo`
2. Install dependencies
`yarn install` 
3. Start
`yarn start`

### Feel free to contribute as well

**Note: Feel free to contribute
