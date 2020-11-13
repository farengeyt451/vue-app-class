interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  public log(message: string): void {
    console.log(message);
  }
}

let logger: Logger;

class LoggerFactory {
  public static getInstance(): Logger {
    if (!logger) {
      logger = new ConsoleLogger();
    }
    return logger;
  }
}

/**
 * Method decorator
 * It should only be applied to a class’s methods
 */
export function methodLogger() {
  logger = LoggerFactory.getInstance();

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const targetMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      logger.log(`Calling ${propertyKey}`);
      return targetMethod.apply(this, args);
    };
  };
}
