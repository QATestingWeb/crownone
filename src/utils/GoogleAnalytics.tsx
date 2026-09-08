import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Loads GA4 on every route after hydration. Page views for App Router
 * navigations are recorded by GA4 Enhanced Measurement (history changes),
 * so this component does not send extra page_view events.
 */
export default function GoogleAnalytics() {
  if (!gaMeasurementId) {
    return null;
  }

  return (
    <NextGoogleAnalytics
      gaId={gaMeasurementId}
      debugMode={process.env.NODE_ENV !== 'production'}
    />
  );
}
