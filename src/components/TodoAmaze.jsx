import React, {useState} from 'react'

export default function TodoAmaze() {
    const [colors, setColors] = useState(['blue, red, green, brown, black'])
  return (
    <div>
        <button style={{backgroundColor: colors}} onClick={() => colors[Math.floor(Math.random() * colors.length)]}>
            TRY CLICKING
        </button>
    </div>
  )
}
