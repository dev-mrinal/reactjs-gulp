/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SearchableTable from './SearchableTable';
import {data} from './data';
import HelloMessage from './HelloMessage';

// Filterable CheatSheet Component
ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );

ReactDOM.render(<HelloMessage name="Hello,Mrinal Mondal, welcome to Cybage." />,  document.getElementById('hello') );