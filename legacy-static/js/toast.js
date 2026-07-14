// Lightweight dependency-free toast, replacing SweetAlert2.
// API: showToast({ icon: 'success' | 'error', title: '...', timer: 2000 })
const showToast = (function () {
    const CONTAINER_ID = 'ttk-toast-container'

    function getContainer() {
        let container = document.getElementById(CONTAINER_ID)
        if (!container) {
            container = document.createElement('div')
            container.id = CONTAINER_ID
            container.className = 'ttk-toast-container'
            document.body.appendChild(container)
        }
        return container
    }

    return function showToast({ icon = 'success', title = '', timer = 2000 } = {}) {
        const toast = document.createElement('div')
        toast.className = 'ttk-toast ttk-toast--' + icon

        const iconEl = document.createElement('span')
        iconEl.className = 'ttk-toast__icon'
        iconEl.textContent = icon === 'success' ? '✓' : '!'

        const titleEl = document.createElement('span')
        titleEl.className = 'ttk-toast__title'
        titleEl.textContent = title

        const track = document.createElement('div')
        track.className = 'ttk-toast__track'
        const progress = document.createElement('div')
        progress.className = 'ttk-toast__progress'
        track.appendChild(progress)

        toast.append(iconEl, titleEl, track)
        getContainer().appendChild(toast)

        let remaining = timer
        let last = Date.now()
        let raf = requestAnimationFrame(tick)

        function tick() {
            const now = Date.now()
            remaining -= now - last
            last = now
            if (remaining <= 0) {
                dismiss()
                return
            }
            progress.style.width = (remaining / timer * 100) + '%'
            raf = requestAnimationFrame(tick)
        }

        function dismiss() {
            cancelAnimationFrame(raf)
            toast.classList.add('ttk-toast--out')
            toast.addEventListener('transitionend', () => toast.remove(), { once: true })
        }

        toast.addEventListener('mouseenter', () => cancelAnimationFrame(raf))
        toast.addEventListener('mouseleave', () => {
            last = Date.now()
            raf = requestAnimationFrame(tick)
        })
    }
})()
