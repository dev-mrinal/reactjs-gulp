/*
*	Author: Mrinal Mondal
*	===========================================================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SearchableTable from './SearchableTable';
import {data} from './data';
import HelloMessage from './HelloMessage';

// Filterable CheatSheet Component
ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );

ReactDOM.render(<HelloMessage name="Hi,Mrinal Mondal, welcome to Cybage." />,  document.getElementById('hello') );

















/*
const element = <h1>Rendaring Elements</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
*/

/*
ReactDOM.render(
<h1>Rendaring elemnets 2 </h1>,
document.getElementById('root3')
);
*/

/*
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}   {' Great apps'}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root3')
  );
}

setInterval(tick, 1000);


class Welcome extends React.Component {

 render() {
     return <h1>Hello, {this.props.name}</h1> ;
 }

}

ReactDOM.render(
 <Welcome name="mrinal mondal" />,
 document.getElementById("name")
);
*/

