import { useEffect, useState } from 'react'
import { SendIcon } from '../components/icons'
import { useToast } from '../components/Toast'

// LEGACY / DEPRECATED: the Telegram bot that used to receive this form was
// deactivated and no longer exists (see legacy-static/js/tlg.js). Submitting
// always shows the "unavailable" toast below instead of calling a dead
// endpoint. Replace with a serverless function that sends the message
// through a current channel, or remove the form.
export function Contact() {
  const showToast = useToast()
  const [sending, setSending] = useState(false)

  useEffect(() => {
    document.title = 'ttk downloader - Contact'
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSending(true)
    showToast({ icon: 'error', title: 'Contact form is currently unavailable :(' })
    setSending(false)
  }

  return (
    <div className="mx-auto max-w-lg py-8">
      <h1 className="mb-2 text-center text-3xl font-extrabold">Contact</h1>
      <p className="mb-6 text-center text-neutral-500">Fill in the fields below to send your message.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Name">
          <input type="text" name="Name" placeholder="Name" minLength={3} maxLength={20} required className="input" />
        </Field>

        <Field label="Email">
          <input type="email" name="Email" placeholder="Email" required className="input" />
        </Field>

        <Field label="How did you hear about us?">
          <select name="How did you hear about us?" defaultValue="default" className="input">
            <option value="default" hidden>Options</option>
            <option value="Social Media">Social Media</option>
            <option value="A Friend">A Friend</option>
            <option value="Other">Other</option>
          </select>
        </Field>

        <Field label="Telegram">
          <input type="text" name="Telegram" placeholder="Number or Username" className="input" />
        </Field>

        <Field label="Message">
          <textarea name="Message" rows={3} maxLength={250} className="input resize-none" />
        </Field>

        <button
          type="submit"
          disabled={sending}
          className="flex items-center justify-center gap-2 rounded bg-neutral-600 py-2.5 font-bold text-white hover:bg-neutral-700 disabled:opacity-70"
        >
          <SendIcon className="h-5 w-5" />
          Send Message
        </button>
      </form>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium">
      {label}
      {children}
    </label>
  )
}
