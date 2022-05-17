import React from 'react'

const Navbar = () => {
  return (
    <>
    <div  style={{backgroundColor: 'skyblue',width: '95%',height: 80,margin: 'auto'}}>
    <div style={{backgroundColor: 'black',width: '90%',height: 60,margin: 'auto',color: 'white',paddingTop:10,display:'flex'}}>
      <h3 style={{textAlign: 'left',marginLeft: 10}}>LOGOBAKERY</h3>
      <div style={{justifyContent:'space-around',display:'flex',width:"50%",margin:'auto'}}>
      <p>Services</p>
      <p>Project</p>
      <p>About</p>
      </div>
      <button style={{backgroundColor:'teal',borderRadius:'50px',height:40,width:'10%',color:'white'}}>Contact</button>

    </div>
    </div>

    </>
   
  )
}

export default Navbar