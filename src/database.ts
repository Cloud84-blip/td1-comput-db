import { sql } from '@databases/pg';
import createPool from '@databases/pg';
import tables from '@databases/pg-typed';
import DatabaseSchema from './__generated__';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export { sql };

const db = createPool({
  bigIntMode: 'number',
  connectionString: process.env.POSTGRESQL_ADDON_URI,
});

export default db;

// You can list whatever tables you actually have here:
const { connections } = tables<DatabaseSchema>({
  databaseSchema: require('./__generated__/schema.json'),
});
export { connections };
