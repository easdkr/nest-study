import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello June!';
  }
}

export class BaseService {
  constructor(private readonly serviceA: ServiceA) {}

  getHello(): string {
    return 'Hello World Base!';
  }

  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}

@Injectable()
export class ServiceA {
  getHello(): string {
    return 'Hello World A!';
  }
}

@Injectable()
export class ServiceB extends BaseService {
  constructor(private readonly _serviceA: ServiceA) {
    super(_serviceA);
  }
  getHello(): string {
    return this.doSomeFuncFromA();
  }
}
