import React from 'react'

const Emoji = ({symbol, size = '1.5em'}: any) => (
  <svg viewBox="0 0 100 100" role="img" width={size} height={size}>
    <text fontSize="90" y="80">
      {symbol}
    </text>
  </svg>
)

export default Emoji
