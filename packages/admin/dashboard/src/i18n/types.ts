import type { Locale } from "date-fns"
import zhTW from "./translations/zhTW.json"

const resources = {
  translation: zhTW,
} as const

export type Resources = typeof resources

export type Language = {
  code: string
  display_name: string
  ltr: boolean
  date_locale: Locale
}
