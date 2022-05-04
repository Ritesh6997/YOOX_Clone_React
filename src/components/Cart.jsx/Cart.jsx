import { Link } from 'react-router-dom'
import React from 'react'
import { Button,} from '@chakra-ui/react';

export default function Cart() {
  return (
    <div>
          <h1 style={{textAlign:"center" }}>SHOPPING BAG</h1>
      <Link to="/">BACK TO SHOPPING</Link>
      <div>
        <Link to="/">
          <Button> PayPal CHECK OUT</Button>
        </Link> or
        <Link to="/">
          {" "}
          <Button>PROCEED WITH YOUR ORDER</Button>{" "}
        </Link>
      </div>
      <hr />
      <div>
        <h2>ITEMS ADDED TO YOUR SHOPPING BAG (2)</h2>
      </div>
    </div>
  );
}
