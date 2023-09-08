function addRowLockOnShows(showId) {
    return `SELECT * from shows WHERE shows.id = ${showId} FOR UPDATE;`
}

module.exports = {addRowLockOnShows}