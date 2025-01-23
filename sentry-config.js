import * as Sentry from '@sentry/browser'

Sentry.init({
	dsn: 'https://4169468df32fba3de15af8d9d2757087@o4508694582788096.ingest.de.sentry.io/4508694585213008',
	integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	tracePropagationTargets: ['localhost'],
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})
