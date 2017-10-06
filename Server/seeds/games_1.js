
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {game_name: 'Guilty Gear Xrd Revelator 2', type: 'anime'},
      ]);
    });
};
