/**
 * Tab initial state.
 */
import { TabState } from "./tab.state";
import { adapter } from "./tab.adapter";
import { TabSlide } from "./tab.slide.model";

export const tabSlideInitialState: TabSlide = {
  isActive: true,
  isShowProgress: true,
  nextSlideInSec: 300,
  startAfterInactiveTimeInSec: 30,
  isSlideBreak: false
};

/** The Initial State of Tab Model */
export const tabInitialState: TabState = adapter.getInitialState({
  options: {
    selectedTab: "no_selection",
    editTab: null
  },
  slide: tabSlideInitialState
});
