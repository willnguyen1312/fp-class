'use strict';

const loggedInUser = 'sashavodnik';

class Cart {
  constructor(options) {
    this.user = options.user;
  }
}

const currentCart = new Cart({
  user: loggedInUser,
});

console.log(currentCart);