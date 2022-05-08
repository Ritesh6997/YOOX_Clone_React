import React from 'react'
import Contactbar from './Contactbar'
import FooterEnd from './FooterEnd'
import Footertop from './Footertop'

export default function Footer() {
  return (
    <div style={{marginTop:"60px"}}>
      <Footertop></Footertop>
      <hr style={{backgroundColor:"white",marginTop:"5px",border:"1px solid White"}} />
      <Contactbar></Contactbar>
      <FooterEnd></FooterEnd>
    </div>
  )
}
