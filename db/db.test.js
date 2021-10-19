const index = require('./index');

async function create(){
  await index.User.sync();
  await index.User.create({
    firstName: 'Mat',
    lastName: 'Dombrock'
  });
}
create();

async function read(){
  const res = await index.User.findAll();
  console.log(res);
}

read();