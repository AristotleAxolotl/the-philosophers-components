// This is where you define your application specific events.

export const CLICK = 'CLICK';
export const ENTER = 'ENTER';
export const CUSTOM_ELEMENT_LOADED = new CustomEvent('custom-element-loaded', {
  detail: { message: 'Target Element has Loaded.' },
  bubbles: true,
  composed: true,
});
export const CUSTOM_ELEMENT_UPDATED = new CustomEvent('custom-element-updated', {
  detail: { message: 'Target Element has been updated.' },
  bubbles: true,
  composed: true,
});
