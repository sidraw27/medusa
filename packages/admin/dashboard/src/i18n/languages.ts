import { enUS, ja, zhTW } from "date-fns/locale"
import { Language } from "./types"

export const languages: Language[] = [
  {
    code: "zhTW",
    display_name: "繁體中文",
    ltr: true,
    date_locale: zhTW,
  },
  {
    code: "en",
    display_name: "English",
    ltr: true,
    date_locale: enUS,
  },
  {
    code: "ja",
    display_name: "日本語",
    ltr: true,
    date_locale: ja,
  },
]
