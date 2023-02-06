const db = require("./models");
const { CRUD } = require("./helpers");

const params = process.argv;

if (params.length <= 2) {
  process.exit(0);
}

// --create:ExampleTable --firstname:example...
const args = params.slice(2);
const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

switch (command) {
  case CRUD.CREATE:
    //Example: --create:Entity --id:1 --firstname:example ...
    const data = {};
    args.slice(1).map((arg) => {
      const tmp = arg.split("=");
      data[tmp[0].substring(2)] = tmp[1];
    });
    db[entity]
      .create(data)
      .then(() => console.log("Contact Created!"))
      .catch(console.log);
    break;

  case CRUD.READ:
    //Example: --read:Entity 
    db[entity].findAll().then(console.log).catch(console.log);
    break;

  case CRUD.UPDATE:
    //Example: --update:Entity --id:1 --firstname:example
    const dataToUpdate = {};
    args.slice(1).map((arg) => {
      const tmp = arg.split("=");
      dataToUpdate[tmp[0].substring(2)] = tmp[1];
    });
    db[entity].findOne({where: { id: dataToUpdate.id}}).then((data)=>{
      data.update({
        firstname: dataToUpdate.firstname,
        lastname: dataToUpdate.lastname,
        phone: dataToUpdate.phone,
        email: dataToUpdate.email,
      })
    }).catch(console.log)
    break;

  case CRUD.DELETE:
    //Example: --delete:Entity --id:1
    const dataToDelete = {};
    args.slice(1).map((arg) => {
      const tmp = arg.split("=");
      dataToDelete[tmp[0].substring(2)] = tmp[1];
    });
    db[entity].destroy({where: { id: dataToDelete.id}})
    .then(console.log("Deleted!"))
    .catch(console.log);
    break;
  default:
    console.log("Operation not found!");
}
