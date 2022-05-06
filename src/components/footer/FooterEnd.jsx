import { Box } from '@chakra-ui/react'
import React from 'react'

export default function FooterEnd() {
  return (
    <div>
      <Box
        w={"100%"}
        h={"130px"}
        bg={"black"}
        color={"white"}
        textAlign={"center"}
      >
        <p style={{ padding: "45px 0", fontSize:"12px"}}>
          POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX
          NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE #
          401/I/526
          <div>LEGAL AREA / PRIVACY POLICY</div>
        </p>
      </Box>
    </div>
  );
}
