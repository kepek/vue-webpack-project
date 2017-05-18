export const utils = {
  formatResponse (modelName, response) {
    return {
      [modelName]: response.body
    }
  }
}
