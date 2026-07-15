import { useLocation } from 'react-router-dom'
import { getLocaleFromPath, stripLocalePrefix } from '../lib/locale'

// Reads the active locale and the unprefixed page path (the one used for
// canonical/hreflang and to switch languages) from the current URL.
export function useLocale() {
  const location = useLocation()
  return {
    locale: getLocaleFromPath(location.pathname),
    path: stripLocalePrefix(location.pathname),
  }
}
