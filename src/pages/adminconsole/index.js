import React,{useState} from 'react';
import './index.css'
function AdminConsole() {
  const [options] = useState(['Account Settings', 'Master']);
  
  return (
    <div className="adminPage">
      <div className="leftNav">
        {options.map((page, i) => {
          return (
            <div className="pagestab">
              <div className="pageTab">{page}</div>
            </div>
          )
        })}
      </div>
      <div className="mainPage">
        Main Page
      </div>
    </div>
  )
}
export default AdminConsole;