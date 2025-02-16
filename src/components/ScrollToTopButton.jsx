import { useEffect, useState } from "react"
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

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, []);

  return (
    <button style={{
      position: 'fixed',
      width: '100%',
      left: '87%',
      opacity: 0.3,
      bottom: '40px',
      width: '40px',
      height: '40px',
      fontSize: '3rem',
      zIndex: 1,
      cursor: 'pointer',
      color: 'gray',
      '-webkit-appearance': 'none'
      }}>
      <FaArrowCircleUp onClick=
      {scrollToTop} style={{display: isVisible ? 'block' : 'none', width: '40px', height: '40px'}} />
    </button>
  )
}
