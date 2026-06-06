import PropTypes from 'prop-types'
import { useEffect } from 'react'

const containerStyle = {
  // 100dvh avoids mobile browser UI bars causing extra unwanted scroll.
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

ScrollContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScrollContainer
