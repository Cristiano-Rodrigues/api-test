export const fakeUsersDb = [];

function populateDb () {
  let limit = 10;
  for (let i = 0; i < limit; i++) {
    const user = createUser();
    fakeUsersDb.push(user);
  }
}

function createUser () {
  return {
    id: Math.floor(Math.random() * 1000),
    name: 'John Doe'
  }
}

populateDb();

export function getUsers (req, res, next) {
  res.send(fakeUsersDb);
}