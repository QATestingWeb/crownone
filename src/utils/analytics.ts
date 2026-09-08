export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetIdOrName: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track a custom GA4 event. No-ops when the Measurement ID is missing
 * or when called outside the browser.
 *
 * @example
 * trackEvent('whatsapp_click', { location: 'header' })
 * trackEvent('product_view', { product_id: 'abc' })
 * trackEvent('dealer_location_click')
 * trackEvent('service_center_click')
 * trackEvent('book_now_click', { source: 'hero' })
 */
export function trackEvent(
  eventName: string,
  eventParams?: AnalyticsEventParams
): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, eventParams ?? {});
}
