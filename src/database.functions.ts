import { Connections_InsertParameters } from './__generated__';
import db, { sql, connections } from './database';

async function createTable() {
  try {
    await db.query(sql`
    CREATE TABLE connections (
    connection_id serial PRIMARY KEY,
    user_id int);`);
    await db.query(sql`
    INSERT into connections VALUES {0, 0}
    `);
  } catch (error) {
    throw error;
  }
}

async function getNbConn() {
  try {
    // Récupérer le nombre actuel de connexions depuis la base de données
    const currentCount = await db
      .query(
        sql`
      SELECT user_id FROM connections WHERE connection_id = 1`,
      )
      .then((data) => {
        return data[0].user_id;
      });
    return currentCount;
  } catch (error) {
    throw error;
  }
}

export { getNbConn, createTable };

async function incrementConnectionCount(count: number) {
  try {
    const newCount: Connections_InsertParameters = {
      connection_id: 1,
      user_id: count + 1,
    };

    // Mettre à jour la base de données avec le nouveau compteur
    await connections(db).update({ connection_id: 1 }, newCount);

    return newCount; // Renvoie le nouveau compteur
  } catch (error) {
    throw error;
  }
}

export default incrementConnectionCount;
