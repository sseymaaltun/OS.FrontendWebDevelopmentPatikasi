import React from 'react'

//Header({number,data})
function Header({number,increment}) {
    console.log('Header Component Re-rendered!!!');
  return (
    <div>
        Header - {number} 
        <br />
        <br />
        <button onClick={increment}>Click</button>
        {/* <code>{JSON.stringify(data)}</code> */}
    </div>
  )
}

export default React.memo(Header) // React.memo is used to prevent unnecessary re-renders of the Header component