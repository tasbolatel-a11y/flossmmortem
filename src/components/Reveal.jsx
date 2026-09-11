import { useEffect, useRef, useState } from 'react'

/**
 * Fade-up on scroll. Adds `reveal` + `is-visible` classes once the element
 * scrolls into view. Uses a scroll/resize position check (reliable across all
 * browsers) instead of IntersectionObserver.
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    let raf = 0
    let poll = 0

    const cleanup = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      if (poll) clearInterval(poll)
    }

    const check = () => {
      const node = ref.current
      if (!node) return false
      const r = node.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (r.top < vh * 0.92 && r.bottom > 0) {
        setShown(true)
        cleanup()
        return true
      }
      return false
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        check()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    // low-frequency safety poll — covers environments where scroll events
    // are throttled or missed; self-clears via cleanup() once revealed
    poll = setInterval(check, 350)

    check()

    return cleanup
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
