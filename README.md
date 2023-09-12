# goi su dung

- khi su dung `ValidationPipe` can cai `class-transformer npm` & `yarn add class-validator`
- su dung auth voi Pipe-nestjs
- co the dung validator theo tung phuong thuc o controller hoac su dung tai global la file `main.ts`
  - bang cach su dung `app.useGlobalPipes(new ValidationPipe())` nestjs se tu dong validate

# dung class-transformer

- de dinh nghia type cua data

# loi `plainToClass` loi thoi

So it looks like it's the latest version of class-transformer:

    "class-transformer": "^0.5.0",

downgrade to 0.4.0 (npm i class-transformer@0.4.0) and the problem solves itself...

# chua xu ly duoc

- su dung expose() de loai bo nhung truong du lieu user dua len server ma cot do khong thuoc cau truc data co san; nếu addnew hàng loạt sẽ lỗi DB.

# meo moi

- hay them field 'ngay tao',`ngay xoa`, `ngay cap nhat` để có gì còn trao đổi lại với user.
- `controller` chi de nhan va tra data dau ra ; khong xu ly logic truc tiep trong controller;
- xu ly logic o `user.services`

# vi du ve Injector:

```typescript
class UserService {
  hello(): void {
    console.log('Hello');
  }
}

// const user = new UserService();
// user.hello();

class UserRepository {
  test(): void {
    console.log('This is a repository');
  }
}

// Injector la noi chua cac container
class Injector {
  private _container = new Map();
  constructor(private _provider: any[] = []) {
    this._provider.forEach((service) =>
      this._container.set(service, new service()),
    );
  }

  get(serviceKey: any) {
    const serviceInstance = this._container.get(serviceKey);
    if (!serviceInstance) {
      throw Error('No provider not found');
    }
    return serviceInstance;
  }
}

const inject = new Injector([UserService, UserRepository]);
const userService = inject.get(UserService);
userService.hello();

const repo = inject.get(UserRepository);
repo.test();
```

# time

video 4: `02:44`
