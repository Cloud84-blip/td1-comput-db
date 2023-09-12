import { Injectable } from '@nestjs/common';
import incrementConnectionCount, { getNbConn } from './database.functions';

@Injectable()
export class AppService {
  async getNbConn(): Promise<string> {
    const old_count = await getNbConn();
    const count = await incrementConnectionCount(old_count).then((data) => {
      return data.user_id;
    });
    return `<p>Number of connections : ${count}<p>`;
  }
}
