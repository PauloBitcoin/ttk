// LEGACY / DEPRECATED: the Telegram bot behind this form was deactivated and no longer exists.
// Submitting the form always shows the "unavailable" message below instead of calling a dead
// endpoint. Do not resurrect the old pattern (an API token must never ship to the client) —
// replace this with a serverless function that sends the message through a current channel,
// or remove the contact form.
const startLoading = () => {
    document.getElementById('loader').classList.remove('hidden')
}
const stopLoading = () => {
    document.getElementById('loader').classList.add('hidden')
}
const fadeText = () => {
    document.getElementById('text-send').classList.add('opacity-0')
}
const showText = () => {
    document.getElementById('text-send').classList.remove('opacity-0')
}
function toggleSpin() {
    startLoading()
    fadeText()
}

document.querySelector('#messageForm').addEventListener('submit', (event) => {
    event.preventDefault()
    showToast({ icon: 'error', title: 'Contact form is currently unavailable :(' })
    stopLoading()
    showText()
})
