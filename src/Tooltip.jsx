// eslint-disable-next-line no-unused-vars
import React from 'react';
//import Tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import './App.css'


function Tooltip() {
 
  return (
    /* using bootstrap button and tippy content or placement  */
    <div>
    
  <div className="d-grid gap-5 col-9 ">
  <Tippy content="This is Tolltip Top" placement="top">
    <button type="button" className="btn btn-success ">Tooltip-Top</button>
    </Tippy>
    
    <Tippy content="This is Tolltip Right" placement="right">
    <button type="button" className="btn btn-primary  ">Tooltip-Right</button>
    </Tippy>
     
    <Tippy content="This is Tolltip Left" placement="left">
   
<button type="button" className="btn btn-secondary  ">Tooltip-Left</button>
    </Tippy>

    
    <Tippy content="This is Tolltip bottom" placement="bottom">
   
<button type="button" className="btn btn-warning " >Tooltipbottom</button>
    </Tippy>
    <Tippy content="This is Tolltip End" placement="bottom">
   
<button type="button" className="btn btn-danger btn-lg" >Tooltip-End</button>
    </Tippy>
    </div>
    
     
    </div>
     /* end using bootstrap button and tippy content or placement  */
  )
}

// export Tooltip
export default Tooltip
