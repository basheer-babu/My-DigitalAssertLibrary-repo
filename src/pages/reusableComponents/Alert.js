import React from 'react'
import SideNav from './SideNav';
import MyCoolCodeBlock from '../../components/MyCoolCodeBlock';
import {codeBlock} from '../../helper/AlertCode';

function Alert() {
  return (
    <>
     <div className='text-center'>
    <h4>alert</h4>
    </div>
    <MyCoolCodeBlock code={codeBlock.HelloMessage} language={"jsx"} showLineNumbers={true}/>
    </>
   
    
  )
}

export default Alert