import React from 'react';
import './TeamAccordion.scss';

export const PanelAccord = (props) => {

    return (

        <div className='panelClass'>
            <div className='accHead' onClick={props.onClick}>
              {props.header}
            </div>
            <div className={props.isOpen !== true ? 'panelHidden' : 'accBody'}>
              {props.content}
            </div>
        </div>
    )
  };