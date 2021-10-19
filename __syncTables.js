const db = require('./db');

async function sync(){
  await db.tools.syncTables();
}
sync();