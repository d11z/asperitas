import moment from 'moment';

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s:  '%ds',
    ss: '%ds',
    m:  '1m',
    mm: '%dm',
    h:  '1h',
    hh: '%dh',
    d:  '1d',
    dd: '%dd',
    M:  '1M',
    MM: '%dM',
    y:  '1y',
    yy: '%dY'
  }
});
