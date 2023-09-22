import { CustomEvent } from '@piwikpro/react-piwik-pro';

export const onDownloadClick = () => {
  CustomEvent.trackEvent('download_button', 'click');
}