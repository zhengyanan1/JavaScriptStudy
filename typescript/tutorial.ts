interface User{
    name: string;
    id: number
}

class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

  let _name = "harden"
  const user: User = new UserAccount(_name, 1);

console.log(user)