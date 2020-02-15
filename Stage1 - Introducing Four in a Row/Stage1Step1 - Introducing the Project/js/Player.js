class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.token = this.createTokens(21);
  }

  /**
   * Creates token objects for player
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an array of new token objects
   */

  createTokens(number) {
    const tokens = [];
    for (let i = 0; i < number; i++) {
      tokens.push(new Token(i, this));
    }
    console.log(tokens);
    return tokens;
  }

  /**
   * Gets all togens that haven't been dropped.
   * @return {array}  Array of unused tokens.
   */
  get unusedTokens() {
    return this.token.filter(token => !token.dropped);
  }

  /**
   * Gets the active token by returning the first toekn in the array of unused tokens.
   * @return {Object}   First token object in the array of unused tokens.
   */
  get activeToken() {
    return this.unusedTokens[0];
  }
}
