import React from 'react'
import Accordition from './Accordition';
const Accorditionslist = ({data}) => {
  return (
    <div>
        {
            data.map((QA) => {
                const {id,name,info} = QA;
                return(
                        <Accordition key={id} {...QA} />
                )
            })
        }

    </div>
  )
}

export default Accorditionslist