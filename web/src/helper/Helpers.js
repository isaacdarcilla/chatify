// eslint-disable-next-line no-unused-vars
export class Slug {
  constructor() {
    this.string = 0
  }
  slugify(str) {
    this.string = str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
    return this
  }
  random() {
    // eslint-disable-next-line no-unused-expressions
    this.string = `${this.string}-${(0 | (Math.random() * 9e6)).toString(36)}`
    return this
  }
}

export const code = () => (Math.random() + 1).toString(36).substring(7)
