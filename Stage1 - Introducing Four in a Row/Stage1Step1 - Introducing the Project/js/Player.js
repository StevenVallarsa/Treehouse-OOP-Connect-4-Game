class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.token = this.createTokens(21);
  }

  createTokens(number) {
    const tokens = [];
    for (let i = 0; i < number; i++) {
      tokens.push(new Token(i, this.name));
    }
    return tokens;
  }
}
