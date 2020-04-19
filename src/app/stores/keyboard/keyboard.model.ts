/** The Keyboard information */
export interface TypeInput {
  key: string
  isAlt: boolean
  isCtrl: boolean
  isMeta: boolean
  isShift: boolean
}

export enum KeyboardAction {
  NEW_TAB, CLOSE_TAB, RENAME_CURRENT_TAB,
  NEXT_TAB_RIGHT, NEXT_TAB_RIGHT_ROTATION, NEXT_TAB_LEFT, NEXT_TAB_LEFT_ROTATION,
  SELECT_TAB_1, SELECT_TAB_2, SELECT_TAB_3, SELECT_TAB_4, SELECT_TAB_5, SELECT_TAB_6, SELECT_TAB_7, SELECT_TAB_8, SELECT_TAB_9, SELECT_TAB_10,
  CLOSE_APP,
  DIALOG_SETTINGS, DIALOG_HELP,
  DEV_TOOLS_TOOGLE, RELOAD_MAIN, TOGGLE_FULLSCREEN
}

export interface KeyboardModel  {
  key: TypeInput
  action: KeyboardAction
  active: boolean
}