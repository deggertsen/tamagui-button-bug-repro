import { isNil, isString } from "lodash"

export const requiredString = (x: unknown, name: string) => {
    if (isNil(x)) {
      throw new Error(
        `ENVIRONMENTAL VARIABLE ERROR:The environmental variable, ${name}, was not given. Make sure this is included in the .env file for the environment you are developing on. Received: ${x}`,
      )
    }
    if (!isString(x)) {
      throw new Error(
        `ENVIRONMENTAL VARIABLE ERROR: Argument must be of type string. Received: ${x}, name: ${name}. Make sure this variable is the correct type.`,
      )
    }
    if (x.length === 0) {
      throw new Error(
        `ENVIRONMENTAL VARIABLE ERROR: Argument is an empty string for ${name}. This is most likely not what you want. If it is, remove this check to log a warning.`,
      )
    }
  
    return x
  }