import {PanelAccord} from './PanelAccord';
import React from 'react';
import './TeamAccordion.scss';

class Accordion extends React.Component {
    constructor (props) {
      super (props);
      this.state = {}
    }
    render () {

      return (
        
        <div className='accordion'>
          {this.props.items.map((item, index) => {
            return <PanelAccord
            isOpen = {this.state[index]}
            onClick={() => {
              this.setState({
                [index]: !this.state[index]         
              })
            }}
             key = {index}
             header = {item.header}
             content = {item.content}
           />
           
          })}
        </div>
      )
    }
  }
export default Accordion;
