import React from 'react';
import logo from './logo512.png';

/* --older version--
class nav extends Component {
    state = {  } 
    render() { 
        return (
        <nav>
            <img src={logo} />
            <h3>React facts</h3>
            <h4>React course - Project1</h4>
        </nav>
        );
    }
}
*/
const nav = () => 
            <nav>
            <img src={logo} />
            <h3>React</h3>
            <h4>React course - Project1</h4>
            </nav>
export default nav;
