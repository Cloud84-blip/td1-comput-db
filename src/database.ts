import { sql } from '@databases/pg';
import createPool from '@databases/pg';
import tables from '@databases/pg-typed';
import DatabaseSchema from './__generated__';

export { sql };

const db = createPool({
  bigIntMode: 'number',
  connectionString: 'postgres://strat:admin@0.0.0.0:5432/counter-td1',
});

export default db;

// You can list whatever tables you actually have here:
const { connections } = tables<DatabaseSchema>({
  databaseSchema: require('./__generated__/schema.json'),
});
export { connections };
