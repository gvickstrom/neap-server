
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({
          name: 'Dunkin',
          roaster: 'Dunkin Donuts',
          origin: 'South America',
          roast: 'Medium',
          caffeine: '150',
          decaf: false,
          price: 3,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Venti',
          roaster: 'Starbucks',
          origin: 'Sudan',
          roast: 'Dark',
          caffeine: '200',
          decaf: false,
          price: 4,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Boom Coffee',
          roaster: 'Galvanize',
          origin: 'America',
          roast: 'Medium-Dark',
          caffeine: '175',
          decaf: false,
          price: 2,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Cool Coffee',
          roaster: 'Seattle\'s Best',
          origin: 'Canada',
          roast: 'Light',
          caffeine: '125',
          decaf: true,
          price: 3,
          quantity: 2
        })
      ]);
    });
};
