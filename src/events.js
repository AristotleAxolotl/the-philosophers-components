// This is where you define your application specific events.

export const CLICK = 'CLICK';
export const ENTER = 'ENTER';
export const CUSTOM_ELEMENT_LOADED = new CustomEvent('custom-element-loaded', {
  detail: { message: 'Target Element has Loaded.' },
  bubbles: true,
  composed: true,
});
