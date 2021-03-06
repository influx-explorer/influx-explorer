// @flow
import storage from '../helpers/storage';

// ensure connection fields existence
const connections = JSON.parse(storage.get('connections', '[]')).map(conn => ({
  url: '',
  u: '',
  p: '',
  db: '',
  ...conn,
}));
// TODO: prevent adding history with no query instead of filtering on init
// HERE filter invalid connection data
const queryHistory = JSON.parse(storage.get('queryHistory', '[]'))
  .filter(hist => hist.query)
  .map(hist => ({
    query: '',
    error: '',
    ...hist,
  }));
const form = {
  url: '',
  u: '',
  p: '',
  db: '',
  q: '',
  __typename: 'FormData',
  ...JSON.parse(storage.get('form')),
};
const isOpenDrawer = storage.get('isOpenDrawer', 'true') === 'true';
const initTimeFormat = storage.get('timeFormat', 'timestamp');

export default {
  isOpenDrawer,
  queryHistory,
  connections,
  form,
  server: null,
  resultsTable: {
    order: 'asc',
    orderBy: null,
    page: 0,
    rowsPerPage: 10,
    timeFormat: initTimeFormat,
    __typename: 'ResultsTable',
  },
};
