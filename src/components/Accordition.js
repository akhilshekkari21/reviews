import React,{useState} from 'react'

const Accordition = ({id,name,info}) => {
    const[sign,setSign] = useState(true)
  return (
    <div>
        <h4>{name}  <button onClick={() => setSign(!sign)}>{sign?'plus':'minus'}</button></h4>
        {

            <p>{!sign ? info : ''}</p>
        }
    </div>
  )
}

export default Accordition