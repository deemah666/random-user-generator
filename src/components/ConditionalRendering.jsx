import React from 'react'
import Form from './Form';
import Counter from './Counter';

const ConditionalRendering = (props) => {
      let myName = props.name;
      if(myName){
        return(
            <div>
               <Counter/>
            </div>
        )
      }else{
        return(
            <div>
               <Form/>
            </div>
        )
  }
}

export default ConditionalRendering
