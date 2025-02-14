import { useState } from "react"
import { FaArrowCircleUp } from "react-icons/fa"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",

    });
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <button style={{
      position: 'fixed',
      width: '100%',
      left: '87%',
      opacity: 0.3,
      bottom: '40px',
      height: '20px',
      fontSize: '3rem',
      zIndex: 1,
      cursor: 'pointer',
      color: 'gray',
      }}>
      <FaArrowCircleUp onClick={scrollToTop} style={{display: isVisible ? 'block' : 'none'}} />
    </button>
  )
}
