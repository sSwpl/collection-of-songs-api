const db = require('../db');
const utils = require('../utils');
const tableName = 'songs';
const fieldTrack = 'track';
const fieldComposer = 'composer';

async function getAll() {
  const result = await db.query(`SELECT * FROM ${tableName}`)
  return utils.getData(result);
}

async function save(songs) {
  const result = await db.query(
    `INSERT INTO ${tableName} (${fieldTrack}, ${fieldComposer}) VALUES ('${songs.track}', '${songs.composer}')`);
  let message = 'Error during saving songs data.';
  if (result.affectedRows) {
    message = 'Songs data saved successfully.';
  }
  return {message};
}

async function del(song) {
  const result = await db.query(
    `DELETE FROM ${tableName} WHERE id = ${song.id}`);
  let message = 'Error during delete songs data.';
  if (result.affectedRows) {
    message = 'Songs data delete successfully.';
  }
  return {message};
}

async function edit(song) {
  const result = await db.query(
    `UPDATE ${tableName} SET ${fieldTrack} = '${song.track}', ${fieldComposer} = '${song.composer}' WHERE id = ${song.id}`);
  let message = 'Error during edit songs data.';
  if (result.affectedRows) {
	message = 'Songs data edit successfully.';
  }
  return {message};
}

module.exports = {
  getAll,
  save,
  del,
  edit,
}