export default {
  host: '/var/run/postgresql',
  comment: "remove this line if not running on our VM and connection to PostgreSQL doesn't work",
  database: 'messageboard',
  statement_timeout: 5000,
};
