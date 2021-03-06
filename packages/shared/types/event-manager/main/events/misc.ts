import { ShowingSystemDialogPayload } from '../payloads/misc'

export interface MiscEvents {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD
  SHOW_SYSTEM_DIALOG
  OPEN_LINK
}

export interface MiscEventPayloads {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD: string | number
  SHOW_SYSTEM_DIALOG: ShowingSystemDialogPayload
  OPEN_LINK: string
}

export interface MiscEventReturns {
  WINDOW_MINIMIZE
  WINDOW_CLOSE
  COPY_TO_CLIPBOARD
  SHOW_SYSTEM_DIALOG: void | string[]
  OPEN_LINK
}
