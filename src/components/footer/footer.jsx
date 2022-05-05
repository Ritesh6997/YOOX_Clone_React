import React from 'react'
import Contactbar from './Contactbar'
import FooterEnd from './FooterEnd'
import Footertop from './Footertop'

export default function Footer() {
  return (
    <div>
      <Footertop></Footertop>
      <hr />
      <Contactbar></Contactbar>
      <FooterEnd></FooterEnd>
    </div>
  )
}
