import { useEffect } from 'react'

const containerStyle = {
  height: '100dvh',
  width: '100vw',
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  scrollBehavior: 'smooth',
  margin: 0,
  padding: 0,
}

const ScrollContainer = ({ children }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div className="scroll-container" style={containerStyle}>
      {children}
    </div>
  )
}

export default ScrollContainer
