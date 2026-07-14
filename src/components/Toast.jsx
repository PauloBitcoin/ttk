import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const ToastContext = createContext(null)

let nextId = 1

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback(({ icon = 'success', title = '', timer = 2000 } = {}) => {
    const id = nextId++
    setToasts((current) => [...current, { id, icon, title, timer }])
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className="ttk-toast-container">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDone={() => dismiss(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}

function Toast({ icon, title, timer, onDone }) {
  const [leaving, setLeaving] = useState(false)
  const [width, setWidth] = useState(100)
  const paused = useRef(false)

  useEffect(() => {
    let remaining = timer
    let last = Date.now()
    let raf
    let leaveTimeout

    const tick = () => {
      if (paused.current) {
        raf = requestAnimationFrame(tick)
        return
      }
      const now = Date.now()
      remaining -= now - last
      last = now
      if (remaining <= 0) {
        setLeaving(true)
        leaveTimeout = setTimeout(onDone, 200)
        return
      }
      setWidth((remaining / timer) * 100)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(leaveTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`ttk-toast ttk-toast--${icon}${leaving ? ' ttk-toast--out' : ''}`}
      onMouseEnter={() => {
        paused.current = true
      }}
      onMouseLeave={() => {
        paused.current = false
      }}
    >
      <span className="ttk-toast__icon">{icon === 'success' ? '✓' : '!'}</span>
      <span className="ttk-toast__title">{title}</span>
      <div className="ttk-toast__track">
        <div className="ttk-toast__progress" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}
