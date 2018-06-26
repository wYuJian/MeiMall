import React from "react";
import ReactDOM from "react-dom";

import MediaQuery from "react-responsive";
// app.js
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions/actions';
import {createStore} from 'redux'
import todoAPP from './reducers/reducers'
let store = createStore(todoAPP)
console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
// 发起一系列 action
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();


import PC from "./pc/router.js";
import Mobile from "./mobile/index.js";
class App extends React.Component{
	render(){ 
		return(
			<div id="mall">
				<MediaQuery query="(min-device-width:980px)">
					<PC />
				</MediaQuery>
				<MediaQuery query="(max-device-width:980px)">
					<Mobile />
				</MediaQuery>
			</div>
		)
	}

}
ReactDOM.render(<App />,document.getElementById('app'))