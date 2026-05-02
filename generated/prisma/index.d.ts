
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Province
 * 
 */
export type Province = $Result.DefaultSelection<Prisma.$ProvincePayload>
/**
 * Model District
 * 
 */
export type District = $Result.DefaultSelection<Prisma.$DistrictPayload>
/**
 * Model PoliceStation
 * 
 */
export type PoliceStation = $Result.DefaultSelection<Prisma.$PoliceStationPayload>
/**
 * Model TukTuk
 * 
 */
export type TukTuk = $Result.DefaultSelection<Prisma.$TukTukPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policeStation`: Exposes CRUD operations for the **PoliceStation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoliceStations
    * const policeStations = await prisma.policeStation.findMany()
    * ```
    */
  get policeStation(): Prisma.PoliceStationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tukTuk`: Exposes CRUD operations for the **TukTuk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TukTuks
    * const tukTuks = await prisma.tukTuk.findMany()
    * ```
    */
  get tukTuk(): Prisma.TukTukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Province: 'Province',
    District: 'District',
    PoliceStation: 'PoliceStation',
    TukTuk: 'TukTuk',
    Device: 'Device',
    Location: 'Location'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "province" | "district" | "policeStation" | "tukTuk" | "device" | "location"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Province: {
        payload: Prisma.$ProvincePayload<ExtArgs>
        fields: Prisma.ProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findFirst: {
            args: Prisma.ProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findMany: {
            args: Prisma.ProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          create: {
            args: Prisma.ProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          createMany: {
            args: Prisma.ProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          delete: {
            args: Prisma.ProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          update: {
            args: Prisma.ProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          deleteMany: {
            args: Prisma.ProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvinceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          upsert: {
            args: Prisma.ProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.ProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      District: {
        payload: Prisma.$DistrictPayload<ExtArgs>
        fields: Prisma.DistrictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findFirst: {
            args: Prisma.DistrictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findMany: {
            args: Prisma.DistrictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          create: {
            args: Prisma.DistrictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          createMany: {
            args: Prisma.DistrictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistrictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          delete: {
            args: Prisma.DistrictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          update: {
            args: Prisma.DistrictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          deleteMany: {
            args: Prisma.DistrictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistrictUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          upsert: {
            args: Prisma.DistrictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.DistrictGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistrictCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      PoliceStation: {
        payload: Prisma.$PoliceStationPayload<ExtArgs>
        fields: Prisma.PoliceStationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoliceStationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoliceStationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>
          }
          findFirst: {
            args: Prisma.PoliceStationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoliceStationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>
          }
          findMany: {
            args: Prisma.PoliceStationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>[]
          }
          create: {
            args: Prisma.PoliceStationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>
          }
          createMany: {
            args: Prisma.PoliceStationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoliceStationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>[]
          }
          delete: {
            args: Prisma.PoliceStationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>
          }
          update: {
            args: Prisma.PoliceStationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>
          }
          deleteMany: {
            args: Prisma.PoliceStationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoliceStationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoliceStationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>[]
          }
          upsert: {
            args: Prisma.PoliceStationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoliceStationPayload>
          }
          aggregate: {
            args: Prisma.PoliceStationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoliceStation>
          }
          groupBy: {
            args: Prisma.PoliceStationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoliceStationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoliceStationCountArgs<ExtArgs>
            result: $Utils.Optional<PoliceStationCountAggregateOutputType> | number
          }
        }
      }
      TukTuk: {
        payload: Prisma.$TukTukPayload<ExtArgs>
        fields: Prisma.TukTukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TukTukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TukTukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>
          }
          findFirst: {
            args: Prisma.TukTukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TukTukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>
          }
          findMany: {
            args: Prisma.TukTukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>[]
          }
          create: {
            args: Prisma.TukTukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>
          }
          createMany: {
            args: Prisma.TukTukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TukTukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>[]
          }
          delete: {
            args: Prisma.TukTukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>
          }
          update: {
            args: Prisma.TukTukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>
          }
          deleteMany: {
            args: Prisma.TukTukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TukTukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TukTukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>[]
          }
          upsert: {
            args: Prisma.TukTukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TukTukPayload>
          }
          aggregate: {
            args: Prisma.TukTukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTukTuk>
          }
          groupBy: {
            args: Prisma.TukTukGroupByArgs<ExtArgs>
            result: $Utils.Optional<TukTukGroupByOutputType>[]
          }
          count: {
            args: Prisma.TukTukCountArgs<ExtArgs>
            result: $Utils.Optional<TukTukCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    province?: ProvinceOmit
    district?: DistrictOmit
    policeStation?: PoliceStationOmit
    tukTuk?: TukTukOmit
    device?: DeviceOmit
    location?: LocationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    districts: number
    users: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    districts?: boolean | ProvinceCountOutputTypeCountDistrictsArgs
    users?: boolean | ProvinceCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountDistrictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DistrictCountOutputType
   */

  export type DistrictCountOutputType = {
    users: number
    policeStations: number
  }

  export type DistrictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DistrictCountOutputTypeCountUsersArgs
    policeStations?: boolean | DistrictCountOutputTypeCountPoliceStationsArgs
  }

  // Custom InputTypes
  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountPoliceStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoliceStationWhereInput
  }


  /**
   * Count Type PoliceStationCountOutputType
   */

  export type PoliceStationCountOutputType = {
    tukTuks: number
    users: number
  }

  export type PoliceStationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tukTuks?: boolean | PoliceStationCountOutputTypeCountTukTuksArgs
    users?: boolean | PoliceStationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PoliceStationCountOutputType without action
   */
  export type PoliceStationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStationCountOutputType
     */
    select?: PoliceStationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoliceStationCountOutputType without action
   */
  export type PoliceStationCountOutputTypeCountTukTuksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TukTukWhereInput
  }

  /**
   * PoliceStationCountOutputType without action
   */
  export type PoliceStationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TukTukCountOutputType
   */

  export type TukTukCountOutputType = {
    locations: number
    devices: number
  }

  export type TukTukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | TukTukCountOutputTypeCountLocationsArgs
    devices?: boolean | TukTukCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * TukTukCountOutputType without action
   */
  export type TukTukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTukCountOutputType
     */
    select?: TukTukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TukTukCountOutputType without action
   */
  export type TukTukCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * TukTukCountOutputType without action
   */
  export type TukTukCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    provinceId: number | null
    districtId: number | null
    stationId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    provinceId: number | null
    districtId: number | null
    stationId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    provinceId: number | null
    districtId: number | null
    stationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    provinceId: number | null
    districtId: number | null
    stationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    provinceId: number
    districtId: number
    stationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    provinceId?: true
    districtId?: true
    stationId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    provinceId?: true
    districtId?: true
    stationId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    provinceId?: true
    districtId?: true
    stationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    provinceId?: true
    districtId?: true
    stationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    provinceId?: true
    districtId?: true
    stationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    provinceId: number | null
    districtId: number | null
    stationId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    provinceId?: boolean
    districtId?: boolean
    stationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    province?: boolean | User$provinceArgs<ExtArgs>
    district?: boolean | User$districtArgs<ExtArgs>
    station?: boolean | User$stationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    provinceId?: boolean
    districtId?: boolean
    stationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    province?: boolean | User$provinceArgs<ExtArgs>
    district?: boolean | User$districtArgs<ExtArgs>
    station?: boolean | User$stationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    provinceId?: boolean
    districtId?: boolean
    stationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    province?: boolean | User$provinceArgs<ExtArgs>
    district?: boolean | User$districtArgs<ExtArgs>
    station?: boolean | User$stationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    provinceId?: boolean
    districtId?: boolean
    stationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "provinceId" | "districtId" | "stationId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | User$provinceArgs<ExtArgs>
    district?: boolean | User$districtArgs<ExtArgs>
    station?: boolean | User$stationArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | User$provinceArgs<ExtArgs>
    district?: boolean | User$districtArgs<ExtArgs>
    station?: boolean | User$stationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | User$provinceArgs<ExtArgs>
    district?: boolean | User$districtArgs<ExtArgs>
    station?: boolean | User$stationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      province: Prisma.$ProvincePayload<ExtArgs> | null
      district: Prisma.$DistrictPayload<ExtArgs> | null
      station: Prisma.$PoliceStationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      provinceId: number | null
      districtId: number | null
      stationId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    province<T extends User$provinceArgs<ExtArgs> = {}>(args?: Subset<T, User$provinceArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    district<T extends User$districtArgs<ExtArgs> = {}>(args?: Subset<T, User$districtArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    station<T extends User$stationArgs<ExtArgs> = {}>(args?: Subset<T, User$stationArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly provinceId: FieldRef<"User", 'Int'>
    readonly districtId: FieldRef<"User", 'Int'>
    readonly stationId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.province
   */
  export type User$provinceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    where?: ProvinceWhereInput
  }

  /**
   * User.district
   */
  export type User$districtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    where?: DistrictWhereInput
  }

  /**
   * User.station
   */
  export type User$stationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    where?: PoliceStationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    id: number | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    id?: true
  }

  export type ProvinceSumAggregateInputType = {
    id?: true
  }

  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithAggregationInput | ProvinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    districts?: boolean | Province$districtsArgs<ExtArgs>
    users?: boolean | Province$usersArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProvinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["province"]>
  export type ProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    districts?: boolean | Province$districtsArgs<ExtArgs>
    users?: boolean | Province$usersArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProvinceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Province"
    objects: {
      districts: Prisma.$DistrictPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = $Result.GetResult<Prisma.$ProvincePayload, S>

  type ProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Province'], meta: { name: 'Province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinceFindUniqueArgs>(args: SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinceFindFirstArgs>(args?: SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinceFindManyArgs>(args?: SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends ProvinceCreateArgs>(args: SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinceCreateManyArgs>(args?: SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {ProvinceCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvinceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends ProvinceDeleteArgs>(args: SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinceUpdateArgs>(args: SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinceUpdateManyArgs>(args: SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {ProvinceUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvinceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends ProvinceUpsertArgs>(args: SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Province model
   */
  readonly fields: ProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    districts<T extends Province$districtsArgs<ExtArgs> = {}>(args?: Subset<T, Province$districtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Province$usersArgs<ExtArgs> = {}>(args?: Subset<T, Province$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Province model
   */
  interface ProvinceFieldRefs {
    readonly id: FieldRef<"Province", 'Int'>
    readonly name: FieldRef<"Province", 'String'>
    readonly createdAt: FieldRef<"Province", 'DateTime'>
    readonly updatedAt: FieldRef<"Province", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Province findUnique
   */
  export type ProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findFirst
   */
  export type ProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province create
   */
  export type ProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }

  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province createManyAndReturn
   */
  export type ProvinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province update
   */
  export type ProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province updateManyAndReturn
   */
  export type ProvinceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }

  /**
   * Province delete
   */
  export type ProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Province.districts
   */
  export type Province$districtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    cursor?: DistrictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * Province.users
   */
  export type Province$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Province without action
   */
  export type ProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Province
     */
    omit?: ProvinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
  }


  /**
   * Model District
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type DistrictSumAggregateOutputType = {
    id: number | null
    provinceId: number | null
  }

  export type DistrictMinAggregateOutputType = {
    id: number | null
    name: string | null
    provinceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: number | null
    name: string | null
    provinceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    provinceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type DistrictSumAggregateInputType = {
    id?: true
    provinceId?: true
  }

  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithAggregationInput | DistrictOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: number
    name: string
    provinceId: number
    createdAt: Date
    updatedAt: Date
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provinceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    users?: boolean | District$usersArgs<ExtArgs>
    policeStations?: boolean | District$policeStationsArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provinceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provinceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectScalar = {
    id?: boolean
    name?: boolean
    provinceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DistrictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "provinceId" | "createdAt" | "updatedAt", ExtArgs["result"]["district"]>
  export type DistrictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    users?: boolean | District$usersArgs<ExtArgs>
    policeStations?: boolean | District$policeStationsArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistrictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }
  export type DistrictIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }

  export type $DistrictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "District"
    objects: {
      province: Prisma.$ProvincePayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      policeStations: Prisma.$PoliceStationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      provinceId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = $Result.GetResult<Prisma.$DistrictPayload, S>

  type DistrictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['District'], meta: { name: 'District' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictFindUniqueArgs>(args: SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictFindFirstArgs>(args?: SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictFindManyArgs>(args?: SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends DistrictCreateArgs>(args: SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Districts.
     * @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictCreateManyArgs>(args?: SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {DistrictCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistrictCreateManyAndReturnArgs>(args?: SelectSubset<T, DistrictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends DistrictDeleteArgs>(args: SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictUpdateArgs>(args: SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictDeleteManyArgs>(args?: SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictUpdateManyArgs>(args: SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts and returns the data updated in the database.
     * @param {DistrictUpdateManyAndReturnArgs} args - Arguments to update many Districts.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistrictUpdateManyAndReturnArgs>(args: SelectSubset<T, DistrictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends DistrictUpsertArgs>(args: SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the District model
   */
  readonly fields: DistrictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends District$usersArgs<ExtArgs> = {}>(args?: Subset<T, District$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    policeStations<T extends District$policeStationsArgs<ExtArgs> = {}>(args?: Subset<T, District$policeStationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the District model
   */
  interface DistrictFieldRefs {
    readonly id: FieldRef<"District", 'Int'>
    readonly name: FieldRef<"District", 'String'>
    readonly provinceId: FieldRef<"District", 'Int'>
    readonly createdAt: FieldRef<"District", 'DateTime'>
    readonly updatedAt: FieldRef<"District", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * District findUnique
   */
  export type DistrictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findFirst
   */
  export type DistrictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findMany
   */
  export type DistrictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District create
   */
  export type DistrictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }

  /**
   * District createMany
   */
  export type DistrictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District createManyAndReturn
   */
  export type DistrictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * District update
   */
  export type DistrictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
  }

  /**
   * District updateManyAndReturn
   */
  export type DistrictUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * District upsert
   */
  export type DistrictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }

  /**
   * District delete
   */
  export type DistrictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
    /**
     * Limit how many Districts to delete.
     */
    limit?: number
  }

  /**
   * District.users
   */
  export type District$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * District.policeStations
   */
  export type District$policeStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    where?: PoliceStationWhereInput
    orderBy?: PoliceStationOrderByWithRelationInput | PoliceStationOrderByWithRelationInput[]
    cursor?: PoliceStationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoliceStationScalarFieldEnum | PoliceStationScalarFieldEnum[]
  }

  /**
   * District without action
   */
  export type DistrictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the District
     */
    omit?: DistrictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
  }


  /**
   * Model PoliceStation
   */

  export type AggregatePoliceStation = {
    _count: PoliceStationCountAggregateOutputType | null
    _avg: PoliceStationAvgAggregateOutputType | null
    _sum: PoliceStationSumAggregateOutputType | null
    _min: PoliceStationMinAggregateOutputType | null
    _max: PoliceStationMaxAggregateOutputType | null
  }

  export type PoliceStationAvgAggregateOutputType = {
    id: number | null
    districtId: number | null
  }

  export type PoliceStationSumAggregateOutputType = {
    id: number | null
    districtId: number | null
  }

  export type PoliceStationMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    districtId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PoliceStationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    districtId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PoliceStationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    districtId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PoliceStationAvgAggregateInputType = {
    id?: true
    districtId?: true
  }

  export type PoliceStationSumAggregateInputType = {
    id?: true
    districtId?: true
  }

  export type PoliceStationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    districtId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PoliceStationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    districtId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PoliceStationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    districtId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PoliceStationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoliceStation to aggregate.
     */
    where?: PoliceStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoliceStations to fetch.
     */
    orderBy?: PoliceStationOrderByWithRelationInput | PoliceStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoliceStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoliceStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoliceStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoliceStations
    **/
    _count?: true | PoliceStationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoliceStationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoliceStationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoliceStationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoliceStationMaxAggregateInputType
  }

  export type GetPoliceStationAggregateType<T extends PoliceStationAggregateArgs> = {
        [P in keyof T & keyof AggregatePoliceStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoliceStation[P]>
      : GetScalarType<T[P], AggregatePoliceStation[P]>
  }




  export type PoliceStationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoliceStationWhereInput
    orderBy?: PoliceStationOrderByWithAggregationInput | PoliceStationOrderByWithAggregationInput[]
    by: PoliceStationScalarFieldEnum[] | PoliceStationScalarFieldEnum
    having?: PoliceStationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoliceStationCountAggregateInputType | true
    _avg?: PoliceStationAvgAggregateInputType
    _sum?: PoliceStationSumAggregateInputType
    _min?: PoliceStationMinAggregateInputType
    _max?: PoliceStationMaxAggregateInputType
  }

  export type PoliceStationGroupByOutputType = {
    id: number
    name: string
    address: string | null
    districtId: number
    createdAt: Date
    updatedAt: Date
    _count: PoliceStationCountAggregateOutputType | null
    _avg: PoliceStationAvgAggregateOutputType | null
    _sum: PoliceStationSumAggregateOutputType | null
    _min: PoliceStationMinAggregateOutputType | null
    _max: PoliceStationMaxAggregateOutputType | null
  }

  type GetPoliceStationGroupByPayload<T extends PoliceStationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoliceStationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoliceStationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoliceStationGroupByOutputType[P]>
            : GetScalarType<T[P], PoliceStationGroupByOutputType[P]>
        }
      >
    >


  export type PoliceStationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    districtId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    tukTuks?: boolean | PoliceStation$tukTuksArgs<ExtArgs>
    users?: boolean | PoliceStation$usersArgs<ExtArgs>
    _count?: boolean | PoliceStationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policeStation"]>

  export type PoliceStationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    districtId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policeStation"]>

  export type PoliceStationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    districtId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policeStation"]>

  export type PoliceStationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    districtId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PoliceStationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "districtId" | "createdAt" | "updatedAt", ExtArgs["result"]["policeStation"]>
  export type PoliceStationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    tukTuks?: boolean | PoliceStation$tukTuksArgs<ExtArgs>
    users?: boolean | PoliceStation$usersArgs<ExtArgs>
    _count?: boolean | PoliceStationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoliceStationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }
  export type PoliceStationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }

  export type $PoliceStationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoliceStation"
    objects: {
      district: Prisma.$DistrictPayload<ExtArgs>
      tukTuks: Prisma.$TukTukPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      districtId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policeStation"]>
    composites: {}
  }

  type PoliceStationGetPayload<S extends boolean | null | undefined | PoliceStationDefaultArgs> = $Result.GetResult<Prisma.$PoliceStationPayload, S>

  type PoliceStationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoliceStationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoliceStationCountAggregateInputType | true
    }

  export interface PoliceStationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoliceStation'], meta: { name: 'PoliceStation' } }
    /**
     * Find zero or one PoliceStation that matches the filter.
     * @param {PoliceStationFindUniqueArgs} args - Arguments to find a PoliceStation
     * @example
     * // Get one PoliceStation
     * const policeStation = await prisma.policeStation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoliceStationFindUniqueArgs>(args: SelectSubset<T, PoliceStationFindUniqueArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoliceStation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoliceStationFindUniqueOrThrowArgs} args - Arguments to find a PoliceStation
     * @example
     * // Get one PoliceStation
     * const policeStation = await prisma.policeStation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoliceStationFindUniqueOrThrowArgs>(args: SelectSubset<T, PoliceStationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoliceStation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceStationFindFirstArgs} args - Arguments to find a PoliceStation
     * @example
     * // Get one PoliceStation
     * const policeStation = await prisma.policeStation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoliceStationFindFirstArgs>(args?: SelectSubset<T, PoliceStationFindFirstArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoliceStation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceStationFindFirstOrThrowArgs} args - Arguments to find a PoliceStation
     * @example
     * // Get one PoliceStation
     * const policeStation = await prisma.policeStation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoliceStationFindFirstOrThrowArgs>(args?: SelectSubset<T, PoliceStationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoliceStations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceStationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoliceStations
     * const policeStations = await prisma.policeStation.findMany()
     * 
     * // Get first 10 PoliceStations
     * const policeStations = await prisma.policeStation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policeStationWithIdOnly = await prisma.policeStation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoliceStationFindManyArgs>(args?: SelectSubset<T, PoliceStationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoliceStation.
     * @param {PoliceStationCreateArgs} args - Arguments to create a PoliceStation.
     * @example
     * // Create one PoliceStation
     * const PoliceStation = await prisma.policeStation.create({
     *   data: {
     *     // ... data to create a PoliceStation
     *   }
     * })
     * 
     */
    create<T extends PoliceStationCreateArgs>(args: SelectSubset<T, PoliceStationCreateArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoliceStations.
     * @param {PoliceStationCreateManyArgs} args - Arguments to create many PoliceStations.
     * @example
     * // Create many PoliceStations
     * const policeStation = await prisma.policeStation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoliceStationCreateManyArgs>(args?: SelectSubset<T, PoliceStationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoliceStations and returns the data saved in the database.
     * @param {PoliceStationCreateManyAndReturnArgs} args - Arguments to create many PoliceStations.
     * @example
     * // Create many PoliceStations
     * const policeStation = await prisma.policeStation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoliceStations and only return the `id`
     * const policeStationWithIdOnly = await prisma.policeStation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoliceStationCreateManyAndReturnArgs>(args?: SelectSubset<T, PoliceStationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoliceStation.
     * @param {PoliceStationDeleteArgs} args - Arguments to delete one PoliceStation.
     * @example
     * // Delete one PoliceStation
     * const PoliceStation = await prisma.policeStation.delete({
     *   where: {
     *     // ... filter to delete one PoliceStation
     *   }
     * })
     * 
     */
    delete<T extends PoliceStationDeleteArgs>(args: SelectSubset<T, PoliceStationDeleteArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoliceStation.
     * @param {PoliceStationUpdateArgs} args - Arguments to update one PoliceStation.
     * @example
     * // Update one PoliceStation
     * const policeStation = await prisma.policeStation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoliceStationUpdateArgs>(args: SelectSubset<T, PoliceStationUpdateArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoliceStations.
     * @param {PoliceStationDeleteManyArgs} args - Arguments to filter PoliceStations to delete.
     * @example
     * // Delete a few PoliceStations
     * const { count } = await prisma.policeStation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoliceStationDeleteManyArgs>(args?: SelectSubset<T, PoliceStationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoliceStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceStationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoliceStations
     * const policeStation = await prisma.policeStation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoliceStationUpdateManyArgs>(args: SelectSubset<T, PoliceStationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoliceStations and returns the data updated in the database.
     * @param {PoliceStationUpdateManyAndReturnArgs} args - Arguments to update many PoliceStations.
     * @example
     * // Update many PoliceStations
     * const policeStation = await prisma.policeStation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoliceStations and only return the `id`
     * const policeStationWithIdOnly = await prisma.policeStation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoliceStationUpdateManyAndReturnArgs>(args: SelectSubset<T, PoliceStationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoliceStation.
     * @param {PoliceStationUpsertArgs} args - Arguments to update or create a PoliceStation.
     * @example
     * // Update or create a PoliceStation
     * const policeStation = await prisma.policeStation.upsert({
     *   create: {
     *     // ... data to create a PoliceStation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoliceStation we want to update
     *   }
     * })
     */
    upsert<T extends PoliceStationUpsertArgs>(args: SelectSubset<T, PoliceStationUpsertArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoliceStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceStationCountArgs} args - Arguments to filter PoliceStations to count.
     * @example
     * // Count the number of PoliceStations
     * const count = await prisma.policeStation.count({
     *   where: {
     *     // ... the filter for the PoliceStations we want to count
     *   }
     * })
    **/
    count<T extends PoliceStationCountArgs>(
      args?: Subset<T, PoliceStationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoliceStationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoliceStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceStationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoliceStationAggregateArgs>(args: Subset<T, PoliceStationAggregateArgs>): Prisma.PrismaPromise<GetPoliceStationAggregateType<T>>

    /**
     * Group by PoliceStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceStationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoliceStationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoliceStationGroupByArgs['orderBy'] }
        : { orderBy?: PoliceStationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoliceStationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoliceStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoliceStation model
   */
  readonly fields: PoliceStationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoliceStation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoliceStationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    district<T extends DistrictDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistrictDefaultArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tukTuks<T extends PoliceStation$tukTuksArgs<ExtArgs> = {}>(args?: Subset<T, PoliceStation$tukTuksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends PoliceStation$usersArgs<ExtArgs> = {}>(args?: Subset<T, PoliceStation$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoliceStation model
   */
  interface PoliceStationFieldRefs {
    readonly id: FieldRef<"PoliceStation", 'Int'>
    readonly name: FieldRef<"PoliceStation", 'String'>
    readonly address: FieldRef<"PoliceStation", 'String'>
    readonly districtId: FieldRef<"PoliceStation", 'Int'>
    readonly createdAt: FieldRef<"PoliceStation", 'DateTime'>
    readonly updatedAt: FieldRef<"PoliceStation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PoliceStation findUnique
   */
  export type PoliceStationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * Filter, which PoliceStation to fetch.
     */
    where: PoliceStationWhereUniqueInput
  }

  /**
   * PoliceStation findUniqueOrThrow
   */
  export type PoliceStationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * Filter, which PoliceStation to fetch.
     */
    where: PoliceStationWhereUniqueInput
  }

  /**
   * PoliceStation findFirst
   */
  export type PoliceStationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * Filter, which PoliceStation to fetch.
     */
    where?: PoliceStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoliceStations to fetch.
     */
    orderBy?: PoliceStationOrderByWithRelationInput | PoliceStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoliceStations.
     */
    cursor?: PoliceStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoliceStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoliceStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoliceStations.
     */
    distinct?: PoliceStationScalarFieldEnum | PoliceStationScalarFieldEnum[]
  }

  /**
   * PoliceStation findFirstOrThrow
   */
  export type PoliceStationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * Filter, which PoliceStation to fetch.
     */
    where?: PoliceStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoliceStations to fetch.
     */
    orderBy?: PoliceStationOrderByWithRelationInput | PoliceStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoliceStations.
     */
    cursor?: PoliceStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoliceStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoliceStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoliceStations.
     */
    distinct?: PoliceStationScalarFieldEnum | PoliceStationScalarFieldEnum[]
  }

  /**
   * PoliceStation findMany
   */
  export type PoliceStationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * Filter, which PoliceStations to fetch.
     */
    where?: PoliceStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoliceStations to fetch.
     */
    orderBy?: PoliceStationOrderByWithRelationInput | PoliceStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoliceStations.
     */
    cursor?: PoliceStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoliceStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoliceStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoliceStations.
     */
    distinct?: PoliceStationScalarFieldEnum | PoliceStationScalarFieldEnum[]
  }

  /**
   * PoliceStation create
   */
  export type PoliceStationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * The data needed to create a PoliceStation.
     */
    data: XOR<PoliceStationCreateInput, PoliceStationUncheckedCreateInput>
  }

  /**
   * PoliceStation createMany
   */
  export type PoliceStationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoliceStations.
     */
    data: PoliceStationCreateManyInput | PoliceStationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoliceStation createManyAndReturn
   */
  export type PoliceStationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * The data used to create many PoliceStations.
     */
    data: PoliceStationCreateManyInput | PoliceStationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoliceStation update
   */
  export type PoliceStationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * The data needed to update a PoliceStation.
     */
    data: XOR<PoliceStationUpdateInput, PoliceStationUncheckedUpdateInput>
    /**
     * Choose, which PoliceStation to update.
     */
    where: PoliceStationWhereUniqueInput
  }

  /**
   * PoliceStation updateMany
   */
  export type PoliceStationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoliceStations.
     */
    data: XOR<PoliceStationUpdateManyMutationInput, PoliceStationUncheckedUpdateManyInput>
    /**
     * Filter which PoliceStations to update
     */
    where?: PoliceStationWhereInput
    /**
     * Limit how many PoliceStations to update.
     */
    limit?: number
  }

  /**
   * PoliceStation updateManyAndReturn
   */
  export type PoliceStationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * The data used to update PoliceStations.
     */
    data: XOR<PoliceStationUpdateManyMutationInput, PoliceStationUncheckedUpdateManyInput>
    /**
     * Filter which PoliceStations to update
     */
    where?: PoliceStationWhereInput
    /**
     * Limit how many PoliceStations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoliceStation upsert
   */
  export type PoliceStationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * The filter to search for the PoliceStation to update in case it exists.
     */
    where: PoliceStationWhereUniqueInput
    /**
     * In case the PoliceStation found by the `where` argument doesn't exist, create a new PoliceStation with this data.
     */
    create: XOR<PoliceStationCreateInput, PoliceStationUncheckedCreateInput>
    /**
     * In case the PoliceStation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoliceStationUpdateInput, PoliceStationUncheckedUpdateInput>
  }

  /**
   * PoliceStation delete
   */
  export type PoliceStationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
    /**
     * Filter which PoliceStation to delete.
     */
    where: PoliceStationWhereUniqueInput
  }

  /**
   * PoliceStation deleteMany
   */
  export type PoliceStationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoliceStations to delete
     */
    where?: PoliceStationWhereInput
    /**
     * Limit how many PoliceStations to delete.
     */
    limit?: number
  }

  /**
   * PoliceStation.tukTuks
   */
  export type PoliceStation$tukTuksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    where?: TukTukWhereInput
    orderBy?: TukTukOrderByWithRelationInput | TukTukOrderByWithRelationInput[]
    cursor?: TukTukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TukTukScalarFieldEnum | TukTukScalarFieldEnum[]
  }

  /**
   * PoliceStation.users
   */
  export type PoliceStation$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * PoliceStation without action
   */
  export type PoliceStationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceStation
     */
    select?: PoliceStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoliceStation
     */
    omit?: PoliceStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceStationInclude<ExtArgs> | null
  }


  /**
   * Model TukTuk
   */

  export type AggregateTukTuk = {
    _count: TukTukCountAggregateOutputType | null
    _avg: TukTukAvgAggregateOutputType | null
    _sum: TukTukSumAggregateOutputType | null
    _min: TukTukMinAggregateOutputType | null
    _max: TukTukMaxAggregateOutputType | null
  }

  export type TukTukAvgAggregateOutputType = {
    id: number | null
    policeStationId: number | null
  }

  export type TukTukSumAggregateOutputType = {
    id: number | null
    policeStationId: number | null
  }

  export type TukTukMinAggregateOutputType = {
    id: number | null
    registrationNumber: string | null
    name: string | null
    policeStationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TukTukMaxAggregateOutputType = {
    id: number | null
    registrationNumber: string | null
    name: string | null
    policeStationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TukTukCountAggregateOutputType = {
    id: number
    registrationNumber: number
    name: number
    policeStationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TukTukAvgAggregateInputType = {
    id?: true
    policeStationId?: true
  }

  export type TukTukSumAggregateInputType = {
    id?: true
    policeStationId?: true
  }

  export type TukTukMinAggregateInputType = {
    id?: true
    registrationNumber?: true
    name?: true
    policeStationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TukTukMaxAggregateInputType = {
    id?: true
    registrationNumber?: true
    name?: true
    policeStationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TukTukCountAggregateInputType = {
    id?: true
    registrationNumber?: true
    name?: true
    policeStationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TukTukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TukTuk to aggregate.
     */
    where?: TukTukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TukTuks to fetch.
     */
    orderBy?: TukTukOrderByWithRelationInput | TukTukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TukTukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TukTuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TukTuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TukTuks
    **/
    _count?: true | TukTukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TukTukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TukTukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TukTukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TukTukMaxAggregateInputType
  }

  export type GetTukTukAggregateType<T extends TukTukAggregateArgs> = {
        [P in keyof T & keyof AggregateTukTuk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTukTuk[P]>
      : GetScalarType<T[P], AggregateTukTuk[P]>
  }




  export type TukTukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TukTukWhereInput
    orderBy?: TukTukOrderByWithAggregationInput | TukTukOrderByWithAggregationInput[]
    by: TukTukScalarFieldEnum[] | TukTukScalarFieldEnum
    having?: TukTukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TukTukCountAggregateInputType | true
    _avg?: TukTukAvgAggregateInputType
    _sum?: TukTukSumAggregateInputType
    _min?: TukTukMinAggregateInputType
    _max?: TukTukMaxAggregateInputType
  }

  export type TukTukGroupByOutputType = {
    id: number
    registrationNumber: string
    name: string | null
    policeStationId: number
    createdAt: Date
    updatedAt: Date
    _count: TukTukCountAggregateOutputType | null
    _avg: TukTukAvgAggregateOutputType | null
    _sum: TukTukSumAggregateOutputType | null
    _min: TukTukMinAggregateOutputType | null
    _max: TukTukMaxAggregateOutputType | null
  }

  type GetTukTukGroupByPayload<T extends TukTukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TukTukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TukTukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TukTukGroupByOutputType[P]>
            : GetScalarType<T[P], TukTukGroupByOutputType[P]>
        }
      >
    >


  export type TukTukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    name?: boolean
    policeStationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policeStation?: boolean | PoliceStationDefaultArgs<ExtArgs>
    locations?: boolean | TukTuk$locationsArgs<ExtArgs>
    devices?: boolean | TukTuk$devicesArgs<ExtArgs>
    _count?: boolean | TukTukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tukTuk"]>

  export type TukTukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    name?: boolean
    policeStationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policeStation?: boolean | PoliceStationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tukTuk"]>

  export type TukTukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    name?: boolean
    policeStationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policeStation?: boolean | PoliceStationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tukTuk"]>

  export type TukTukSelectScalar = {
    id?: boolean
    registrationNumber?: boolean
    name?: boolean
    policeStationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TukTukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registrationNumber" | "name" | "policeStationId" | "createdAt" | "updatedAt", ExtArgs["result"]["tukTuk"]>
  export type TukTukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policeStation?: boolean | PoliceStationDefaultArgs<ExtArgs>
    locations?: boolean | TukTuk$locationsArgs<ExtArgs>
    devices?: boolean | TukTuk$devicesArgs<ExtArgs>
    _count?: boolean | TukTukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TukTukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policeStation?: boolean | PoliceStationDefaultArgs<ExtArgs>
  }
  export type TukTukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policeStation?: boolean | PoliceStationDefaultArgs<ExtArgs>
  }

  export type $TukTukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TukTuk"
    objects: {
      policeStation: Prisma.$PoliceStationPayload<ExtArgs>
      locations: Prisma.$LocationPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registrationNumber: string
      name: string | null
      policeStationId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tukTuk"]>
    composites: {}
  }

  type TukTukGetPayload<S extends boolean | null | undefined | TukTukDefaultArgs> = $Result.GetResult<Prisma.$TukTukPayload, S>

  type TukTukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TukTukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TukTukCountAggregateInputType | true
    }

  export interface TukTukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TukTuk'], meta: { name: 'TukTuk' } }
    /**
     * Find zero or one TukTuk that matches the filter.
     * @param {TukTukFindUniqueArgs} args - Arguments to find a TukTuk
     * @example
     * // Get one TukTuk
     * const tukTuk = await prisma.tukTuk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TukTukFindUniqueArgs>(args: SelectSubset<T, TukTukFindUniqueArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TukTuk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TukTukFindUniqueOrThrowArgs} args - Arguments to find a TukTuk
     * @example
     * // Get one TukTuk
     * const tukTuk = await prisma.tukTuk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TukTukFindUniqueOrThrowArgs>(args: SelectSubset<T, TukTukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TukTuk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TukTukFindFirstArgs} args - Arguments to find a TukTuk
     * @example
     * // Get one TukTuk
     * const tukTuk = await prisma.tukTuk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TukTukFindFirstArgs>(args?: SelectSubset<T, TukTukFindFirstArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TukTuk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TukTukFindFirstOrThrowArgs} args - Arguments to find a TukTuk
     * @example
     * // Get one TukTuk
     * const tukTuk = await prisma.tukTuk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TukTukFindFirstOrThrowArgs>(args?: SelectSubset<T, TukTukFindFirstOrThrowArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TukTuks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TukTukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TukTuks
     * const tukTuks = await prisma.tukTuk.findMany()
     * 
     * // Get first 10 TukTuks
     * const tukTuks = await prisma.tukTuk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tukTukWithIdOnly = await prisma.tukTuk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TukTukFindManyArgs>(args?: SelectSubset<T, TukTukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TukTuk.
     * @param {TukTukCreateArgs} args - Arguments to create a TukTuk.
     * @example
     * // Create one TukTuk
     * const TukTuk = await prisma.tukTuk.create({
     *   data: {
     *     // ... data to create a TukTuk
     *   }
     * })
     * 
     */
    create<T extends TukTukCreateArgs>(args: SelectSubset<T, TukTukCreateArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TukTuks.
     * @param {TukTukCreateManyArgs} args - Arguments to create many TukTuks.
     * @example
     * // Create many TukTuks
     * const tukTuk = await prisma.tukTuk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TukTukCreateManyArgs>(args?: SelectSubset<T, TukTukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TukTuks and returns the data saved in the database.
     * @param {TukTukCreateManyAndReturnArgs} args - Arguments to create many TukTuks.
     * @example
     * // Create many TukTuks
     * const tukTuk = await prisma.tukTuk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TukTuks and only return the `id`
     * const tukTukWithIdOnly = await prisma.tukTuk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TukTukCreateManyAndReturnArgs>(args?: SelectSubset<T, TukTukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TukTuk.
     * @param {TukTukDeleteArgs} args - Arguments to delete one TukTuk.
     * @example
     * // Delete one TukTuk
     * const TukTuk = await prisma.tukTuk.delete({
     *   where: {
     *     // ... filter to delete one TukTuk
     *   }
     * })
     * 
     */
    delete<T extends TukTukDeleteArgs>(args: SelectSubset<T, TukTukDeleteArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TukTuk.
     * @param {TukTukUpdateArgs} args - Arguments to update one TukTuk.
     * @example
     * // Update one TukTuk
     * const tukTuk = await prisma.tukTuk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TukTukUpdateArgs>(args: SelectSubset<T, TukTukUpdateArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TukTuks.
     * @param {TukTukDeleteManyArgs} args - Arguments to filter TukTuks to delete.
     * @example
     * // Delete a few TukTuks
     * const { count } = await prisma.tukTuk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TukTukDeleteManyArgs>(args?: SelectSubset<T, TukTukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TukTuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TukTukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TukTuks
     * const tukTuk = await prisma.tukTuk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TukTukUpdateManyArgs>(args: SelectSubset<T, TukTukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TukTuks and returns the data updated in the database.
     * @param {TukTukUpdateManyAndReturnArgs} args - Arguments to update many TukTuks.
     * @example
     * // Update many TukTuks
     * const tukTuk = await prisma.tukTuk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TukTuks and only return the `id`
     * const tukTukWithIdOnly = await prisma.tukTuk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TukTukUpdateManyAndReturnArgs>(args: SelectSubset<T, TukTukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TukTuk.
     * @param {TukTukUpsertArgs} args - Arguments to update or create a TukTuk.
     * @example
     * // Update or create a TukTuk
     * const tukTuk = await prisma.tukTuk.upsert({
     *   create: {
     *     // ... data to create a TukTuk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TukTuk we want to update
     *   }
     * })
     */
    upsert<T extends TukTukUpsertArgs>(args: SelectSubset<T, TukTukUpsertArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TukTuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TukTukCountArgs} args - Arguments to filter TukTuks to count.
     * @example
     * // Count the number of TukTuks
     * const count = await prisma.tukTuk.count({
     *   where: {
     *     // ... the filter for the TukTuks we want to count
     *   }
     * })
    **/
    count<T extends TukTukCountArgs>(
      args?: Subset<T, TukTukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TukTukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TukTuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TukTukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TukTukAggregateArgs>(args: Subset<T, TukTukAggregateArgs>): Prisma.PrismaPromise<GetTukTukAggregateType<T>>

    /**
     * Group by TukTuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TukTukGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TukTukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TukTukGroupByArgs['orderBy'] }
        : { orderBy?: TukTukGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TukTukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTukTukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TukTuk model
   */
  readonly fields: TukTukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TukTuk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TukTukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    policeStation<T extends PoliceStationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoliceStationDefaultArgs<ExtArgs>>): Prisma__PoliceStationClient<$Result.GetResult<Prisma.$PoliceStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends TukTuk$locationsArgs<ExtArgs> = {}>(args?: Subset<T, TukTuk$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends TukTuk$devicesArgs<ExtArgs> = {}>(args?: Subset<T, TukTuk$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TukTuk model
   */
  interface TukTukFieldRefs {
    readonly id: FieldRef<"TukTuk", 'Int'>
    readonly registrationNumber: FieldRef<"TukTuk", 'String'>
    readonly name: FieldRef<"TukTuk", 'String'>
    readonly policeStationId: FieldRef<"TukTuk", 'Int'>
    readonly createdAt: FieldRef<"TukTuk", 'DateTime'>
    readonly updatedAt: FieldRef<"TukTuk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TukTuk findUnique
   */
  export type TukTukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * Filter, which TukTuk to fetch.
     */
    where: TukTukWhereUniqueInput
  }

  /**
   * TukTuk findUniqueOrThrow
   */
  export type TukTukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * Filter, which TukTuk to fetch.
     */
    where: TukTukWhereUniqueInput
  }

  /**
   * TukTuk findFirst
   */
  export type TukTukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * Filter, which TukTuk to fetch.
     */
    where?: TukTukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TukTuks to fetch.
     */
    orderBy?: TukTukOrderByWithRelationInput | TukTukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TukTuks.
     */
    cursor?: TukTukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TukTuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TukTuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TukTuks.
     */
    distinct?: TukTukScalarFieldEnum | TukTukScalarFieldEnum[]
  }

  /**
   * TukTuk findFirstOrThrow
   */
  export type TukTukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * Filter, which TukTuk to fetch.
     */
    where?: TukTukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TukTuks to fetch.
     */
    orderBy?: TukTukOrderByWithRelationInput | TukTukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TukTuks.
     */
    cursor?: TukTukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TukTuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TukTuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TukTuks.
     */
    distinct?: TukTukScalarFieldEnum | TukTukScalarFieldEnum[]
  }

  /**
   * TukTuk findMany
   */
  export type TukTukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * Filter, which TukTuks to fetch.
     */
    where?: TukTukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TukTuks to fetch.
     */
    orderBy?: TukTukOrderByWithRelationInput | TukTukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TukTuks.
     */
    cursor?: TukTukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TukTuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TukTuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TukTuks.
     */
    distinct?: TukTukScalarFieldEnum | TukTukScalarFieldEnum[]
  }

  /**
   * TukTuk create
   */
  export type TukTukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * The data needed to create a TukTuk.
     */
    data: XOR<TukTukCreateInput, TukTukUncheckedCreateInput>
  }

  /**
   * TukTuk createMany
   */
  export type TukTukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TukTuks.
     */
    data: TukTukCreateManyInput | TukTukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TukTuk createManyAndReturn
   */
  export type TukTukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * The data used to create many TukTuks.
     */
    data: TukTukCreateManyInput | TukTukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TukTuk update
   */
  export type TukTukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * The data needed to update a TukTuk.
     */
    data: XOR<TukTukUpdateInput, TukTukUncheckedUpdateInput>
    /**
     * Choose, which TukTuk to update.
     */
    where: TukTukWhereUniqueInput
  }

  /**
   * TukTuk updateMany
   */
  export type TukTukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TukTuks.
     */
    data: XOR<TukTukUpdateManyMutationInput, TukTukUncheckedUpdateManyInput>
    /**
     * Filter which TukTuks to update
     */
    where?: TukTukWhereInput
    /**
     * Limit how many TukTuks to update.
     */
    limit?: number
  }

  /**
   * TukTuk updateManyAndReturn
   */
  export type TukTukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * The data used to update TukTuks.
     */
    data: XOR<TukTukUpdateManyMutationInput, TukTukUncheckedUpdateManyInput>
    /**
     * Filter which TukTuks to update
     */
    where?: TukTukWhereInput
    /**
     * Limit how many TukTuks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TukTuk upsert
   */
  export type TukTukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * The filter to search for the TukTuk to update in case it exists.
     */
    where: TukTukWhereUniqueInput
    /**
     * In case the TukTuk found by the `where` argument doesn't exist, create a new TukTuk with this data.
     */
    create: XOR<TukTukCreateInput, TukTukUncheckedCreateInput>
    /**
     * In case the TukTuk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TukTukUpdateInput, TukTukUncheckedUpdateInput>
  }

  /**
   * TukTuk delete
   */
  export type TukTukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
    /**
     * Filter which TukTuk to delete.
     */
    where: TukTukWhereUniqueInput
  }

  /**
   * TukTuk deleteMany
   */
  export type TukTukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TukTuks to delete
     */
    where?: TukTukWhereInput
    /**
     * Limit how many TukTuks to delete.
     */
    limit?: number
  }

  /**
   * TukTuk.locations
   */
  export type TukTuk$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * TukTuk.devices
   */
  export type TukTuk$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * TukTuk without action
   */
  export type TukTukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TukTuk
     */
    select?: TukTukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TukTuk
     */
    omit?: TukTukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TukTukInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    tukTukId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    tukTukId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    name: string | null
    keyId: string | null
    secretHash: string | null
    tukTukId: number | null
    isRevoked: boolean | null
    rotatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    keyId: string | null
    secretHash: string | null
    tukTukId: number | null
    isRevoked: boolean | null
    rotatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    keyId: number
    secretHash: number
    tukTukId: number
    isRevoked: number
    rotatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    tukTukId?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    tukTukId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    keyId?: true
    secretHash?: true
    tukTukId?: true
    isRevoked?: true
    rotatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    keyId?: true
    secretHash?: true
    tukTukId?: true
    isRevoked?: true
    rotatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    keyId?: true
    secretHash?: true
    tukTukId?: true
    isRevoked?: true
    rotatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    name: string
    keyId: string
    secretHash: string
    tukTukId: number
    isRevoked: boolean
    rotatedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyId?: boolean
    secretHash?: boolean
    tukTukId?: boolean
    isRevoked?: boolean
    rotatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyId?: boolean
    secretHash?: boolean
    tukTukId?: boolean
    isRevoked?: boolean
    rotatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyId?: boolean
    secretHash?: boolean
    tukTukId?: boolean
    isRevoked?: boolean
    rotatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    keyId?: boolean
    secretHash?: boolean
    tukTukId?: boolean
    isRevoked?: boolean
    rotatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyId" | "secretHash" | "tukTukId" | "isRevoked" | "rotatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      tukTuk: Prisma.$TukTukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      keyId: string
      secretHash: string
      tukTukId: number
      isRevoked: boolean
      rotatedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tukTuk<T extends TukTukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TukTukDefaultArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly name: FieldRef<"Device", 'String'>
    readonly keyId: FieldRef<"Device", 'String'>
    readonly secretHash: FieldRef<"Device", 'String'>
    readonly tukTukId: FieldRef<"Device", 'Int'>
    readonly isRevoked: FieldRef<"Device", 'Boolean'>
    readonly rotatedAt: FieldRef<"Device", 'DateTime'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    tukTukId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    tukTukId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    tukTukId: number | null
    latitude: number | null
    longitude: number | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    tukTukId: number | null
    latitude: number | null
    longitude: number | null
    recordedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    tukTukId: number
    latitude: number
    longitude: number
    recordedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    tukTukId?: true
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    tukTukId?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    tukTukId?: true
    latitude?: true
    longitude?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    tukTukId?: true
    latitude?: true
    longitude?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    tukTukId?: true
    latitude?: true
    longitude?: true
    recordedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    tukTukId: number
    latitude: number
    longitude: number
    recordedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tukTukId?: boolean
    latitude?: boolean
    longitude?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tukTukId?: boolean
    latitude?: boolean
    longitude?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tukTukId?: boolean
    latitude?: boolean
    longitude?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    tukTukId?: boolean
    latitude?: boolean
    longitude?: boolean
    recordedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tukTukId" | "latitude" | "longitude" | "recordedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tukTuk?: boolean | TukTukDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      tukTuk: Prisma.$TukTukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tukTukId: number
      latitude: number
      longitude: number
      recordedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tukTuk<T extends TukTukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TukTukDefaultArgs<ExtArgs>>): Prisma__TukTukClient<$Result.GetResult<Prisma.$TukTukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly tukTukId: FieldRef<"Location", 'Int'>
    readonly latitude: FieldRef<"Location", 'Float'>
    readonly longitude: FieldRef<"Location", 'Float'>
    readonly recordedAt: FieldRef<"Location", 'DateTime'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    provinceId: 'provinceId',
    districtId: 'districtId',
    stationId: 'stationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    provinceId: 'provinceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const PoliceStationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    districtId: 'districtId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PoliceStationScalarFieldEnum = (typeof PoliceStationScalarFieldEnum)[keyof typeof PoliceStationScalarFieldEnum]


  export const TukTukScalarFieldEnum: {
    id: 'id',
    registrationNumber: 'registrationNumber',
    name: 'name',
    policeStationId: 'policeStationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TukTukScalarFieldEnum = (typeof TukTukScalarFieldEnum)[keyof typeof TukTukScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyId: 'keyId',
    secretHash: 'secretHash',
    tukTukId: 'tukTukId',
    isRevoked: 'isRevoked',
    rotatedAt: 'rotatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    tukTukId: 'tukTukId',
    latitude: 'latitude',
    longitude: 'longitude',
    recordedAt: 'recordedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    provinceId?: IntNullableFilter<"User"> | number | null
    districtId?: IntNullableFilter<"User"> | number | null
    stationId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    province?: XOR<ProvinceNullableScalarRelationFilter, ProvinceWhereInput> | null
    district?: XOR<DistrictNullableScalarRelationFilter, DistrictWhereInput> | null
    station?: XOR<PoliceStationNullableScalarRelationFilter, PoliceStationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provinceId?: SortOrderInput | SortOrder
    districtId?: SortOrderInput | SortOrder
    stationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    province?: ProvinceOrderByWithRelationInput
    district?: DistrictOrderByWithRelationInput
    station?: PoliceStationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    provinceId?: IntNullableFilter<"User"> | number | null
    districtId?: IntNullableFilter<"User"> | number | null
    stationId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    province?: XOR<ProvinceNullableScalarRelationFilter, ProvinceWhereInput> | null
    district?: XOR<DistrictNullableScalarRelationFilter, DistrictWhereInput> | null
    station?: XOR<PoliceStationNullableScalarRelationFilter, PoliceStationWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provinceId?: SortOrderInput | SortOrder
    districtId?: SortOrderInput | SortOrder
    stationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    provinceId?: IntNullableWithAggregatesFilter<"User"> | number | null
    districtId?: IntNullableWithAggregatesFilter<"User"> | number | null
    stationId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProvinceWhereInput = {
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    id?: IntFilter<"Province"> | number
    name?: StringFilter<"Province"> | string
    createdAt?: DateTimeFilter<"Province"> | Date | string
    updatedAt?: DateTimeFilter<"Province"> | Date | string
    districts?: DistrictListRelationFilter
    users?: UserListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    districts?: DistrictOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    name?: StringFilter<"Province"> | string
    createdAt?: DateTimeFilter<"Province"> | Date | string
    updatedAt?: DateTimeFilter<"Province"> | Date | string
    districts?: DistrictListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _avg?: ProvinceAvgOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
    _sum?: ProvinceSumOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    OR?: ProvinceScalarWhereWithAggregatesInput[]
    NOT?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Province"> | number
    name?: StringWithAggregatesFilter<"Province"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Province"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Province"> | Date | string
  }

  export type DistrictWhereInput = {
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    id?: IntFilter<"District"> | number
    name?: StringFilter<"District"> | string
    provinceId?: IntFilter<"District"> | number
    createdAt?: DateTimeFilter<"District"> | Date | string
    updatedAt?: DateTimeFilter<"District"> | Date | string
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    users?: UserListRelationFilter
    policeStations?: PoliceStationListRelationFilter
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    province?: ProvinceOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    policeStations?: PoliceStationOrderByRelationAggregateInput
  }

  export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    name?: StringFilter<"District"> | string
    provinceId?: IntFilter<"District"> | number
    createdAt?: DateTimeFilter<"District"> | Date | string
    updatedAt?: DateTimeFilter<"District"> | Date | string
    province?: XOR<ProvinceScalarRelationFilter, ProvinceWhereInput>
    users?: UserListRelationFilter
    policeStations?: PoliceStationListRelationFilter
  }, "id">

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _avg?: DistrictAvgOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
    _sum?: DistrictSumOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    OR?: DistrictScalarWhereWithAggregatesInput[]
    NOT?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"District"> | number
    name?: StringWithAggregatesFilter<"District"> | string
    provinceId?: IntWithAggregatesFilter<"District"> | number
    createdAt?: DateTimeWithAggregatesFilter<"District"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"District"> | Date | string
  }

  export type PoliceStationWhereInput = {
    AND?: PoliceStationWhereInput | PoliceStationWhereInput[]
    OR?: PoliceStationWhereInput[]
    NOT?: PoliceStationWhereInput | PoliceStationWhereInput[]
    id?: IntFilter<"PoliceStation"> | number
    name?: StringFilter<"PoliceStation"> | string
    address?: StringNullableFilter<"PoliceStation"> | string | null
    districtId?: IntFilter<"PoliceStation"> | number
    createdAt?: DateTimeFilter<"PoliceStation"> | Date | string
    updatedAt?: DateTimeFilter<"PoliceStation"> | Date | string
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
    tukTuks?: TukTukListRelationFilter
    users?: UserListRelationFilter
  }

  export type PoliceStationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    district?: DistrictOrderByWithRelationInput
    tukTuks?: TukTukOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type PoliceStationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PoliceStationWhereInput | PoliceStationWhereInput[]
    OR?: PoliceStationWhereInput[]
    NOT?: PoliceStationWhereInput | PoliceStationWhereInput[]
    name?: StringFilter<"PoliceStation"> | string
    address?: StringNullableFilter<"PoliceStation"> | string | null
    districtId?: IntFilter<"PoliceStation"> | number
    createdAt?: DateTimeFilter<"PoliceStation"> | Date | string
    updatedAt?: DateTimeFilter<"PoliceStation"> | Date | string
    district?: XOR<DistrictScalarRelationFilter, DistrictWhereInput>
    tukTuks?: TukTukListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type PoliceStationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PoliceStationCountOrderByAggregateInput
    _avg?: PoliceStationAvgOrderByAggregateInput
    _max?: PoliceStationMaxOrderByAggregateInput
    _min?: PoliceStationMinOrderByAggregateInput
    _sum?: PoliceStationSumOrderByAggregateInput
  }

  export type PoliceStationScalarWhereWithAggregatesInput = {
    AND?: PoliceStationScalarWhereWithAggregatesInput | PoliceStationScalarWhereWithAggregatesInput[]
    OR?: PoliceStationScalarWhereWithAggregatesInput[]
    NOT?: PoliceStationScalarWhereWithAggregatesInput | PoliceStationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PoliceStation"> | number
    name?: StringWithAggregatesFilter<"PoliceStation"> | string
    address?: StringNullableWithAggregatesFilter<"PoliceStation"> | string | null
    districtId?: IntWithAggregatesFilter<"PoliceStation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PoliceStation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PoliceStation"> | Date | string
  }

  export type TukTukWhereInput = {
    AND?: TukTukWhereInput | TukTukWhereInput[]
    OR?: TukTukWhereInput[]
    NOT?: TukTukWhereInput | TukTukWhereInput[]
    id?: IntFilter<"TukTuk"> | number
    registrationNumber?: StringFilter<"TukTuk"> | string
    name?: StringNullableFilter<"TukTuk"> | string | null
    policeStationId?: IntFilter<"TukTuk"> | number
    createdAt?: DateTimeFilter<"TukTuk"> | Date | string
    updatedAt?: DateTimeFilter<"TukTuk"> | Date | string
    policeStation?: XOR<PoliceStationScalarRelationFilter, PoliceStationWhereInput>
    locations?: LocationListRelationFilter
    devices?: DeviceListRelationFilter
  }

  export type TukTukOrderByWithRelationInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    policeStationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    policeStation?: PoliceStationOrderByWithRelationInput
    locations?: LocationOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type TukTukWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    registrationNumber?: string
    AND?: TukTukWhereInput | TukTukWhereInput[]
    OR?: TukTukWhereInput[]
    NOT?: TukTukWhereInput | TukTukWhereInput[]
    name?: StringNullableFilter<"TukTuk"> | string | null
    policeStationId?: IntFilter<"TukTuk"> | number
    createdAt?: DateTimeFilter<"TukTuk"> | Date | string
    updatedAt?: DateTimeFilter<"TukTuk"> | Date | string
    policeStation?: XOR<PoliceStationScalarRelationFilter, PoliceStationWhereInput>
    locations?: LocationListRelationFilter
    devices?: DeviceListRelationFilter
  }, "id" | "registrationNumber">

  export type TukTukOrderByWithAggregationInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    policeStationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TukTukCountOrderByAggregateInput
    _avg?: TukTukAvgOrderByAggregateInput
    _max?: TukTukMaxOrderByAggregateInput
    _min?: TukTukMinOrderByAggregateInput
    _sum?: TukTukSumOrderByAggregateInput
  }

  export type TukTukScalarWhereWithAggregatesInput = {
    AND?: TukTukScalarWhereWithAggregatesInput | TukTukScalarWhereWithAggregatesInput[]
    OR?: TukTukScalarWhereWithAggregatesInput[]
    NOT?: TukTukScalarWhereWithAggregatesInput | TukTukScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TukTuk"> | number
    registrationNumber?: StringWithAggregatesFilter<"TukTuk"> | string
    name?: StringNullableWithAggregatesFilter<"TukTuk"> | string | null
    policeStationId?: IntWithAggregatesFilter<"TukTuk"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TukTuk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TukTuk"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    keyId?: StringFilter<"Device"> | string
    secretHash?: StringFilter<"Device"> | string
    tukTukId?: IntFilter<"Device"> | number
    isRevoked?: BoolFilter<"Device"> | boolean
    rotatedAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    tukTuk?: XOR<TukTukScalarRelationFilter, TukTukWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    keyId?: SortOrder
    secretHash?: SortOrder
    tukTukId?: SortOrder
    isRevoked?: SortOrder
    rotatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tukTuk?: TukTukOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    keyId?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    secretHash?: StringFilter<"Device"> | string
    tukTukId?: IntFilter<"Device"> | number
    isRevoked?: BoolFilter<"Device"> | boolean
    rotatedAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    tukTuk?: XOR<TukTukScalarRelationFilter, TukTukWhereInput>
  }, "id" | "keyId">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    keyId?: SortOrder
    secretHash?: SortOrder
    tukTukId?: SortOrder
    isRevoked?: SortOrder
    rotatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    name?: StringWithAggregatesFilter<"Device"> | string
    keyId?: StringWithAggregatesFilter<"Device"> | string
    secretHash?: StringWithAggregatesFilter<"Device"> | string
    tukTukId?: IntWithAggregatesFilter<"Device"> | number
    isRevoked?: BoolWithAggregatesFilter<"Device"> | boolean
    rotatedAt?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    tukTukId?: IntFilter<"Location"> | number
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    recordedAt?: DateTimeFilter<"Location"> | Date | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    tukTuk?: XOR<TukTukScalarRelationFilter, TukTukWhereInput>
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    tukTukId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tukTuk?: TukTukOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    tukTukId?: IntFilter<"Location"> | number
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    recordedAt?: DateTimeFilter<"Location"> | Date | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    tukTuk?: XOR<TukTukScalarRelationFilter, TukTukWhereInput>
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    tukTukId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    tukTukId?: IntWithAggregatesFilter<"Location"> | number
    latitude?: FloatWithAggregatesFilter<"Location"> | number
    longitude?: FloatWithAggregatesFilter<"Location"> | number
    recordedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    province?: ProvinceCreateNestedOneWithoutUsersInput
    district?: DistrictCreateNestedOneWithoutUsersInput
    station?: PoliceStationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    provinceId?: number | null
    districtId?: number | null
    stationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneWithoutUsersNestedInput
    district?: DistrictUpdateOneWithoutUsersNestedInput
    station?: PoliceStationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    stationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    provinceId?: number | null
    districtId?: number | null
    stationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    stationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvinceCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    districts?: DistrictCreateNestedManyWithoutProvinceInput
    users?: UserCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    districts?: DistrictUncheckedCreateNestedManyWithoutProvinceInput
    users?: UserUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    districts?: DistrictUpdateManyWithoutProvinceNestedInput
    users?: UserUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    districts?: DistrictUncheckedUpdateManyWithoutProvinceNestedInput
    users?: UserUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProvinceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    province: ProvinceCreateNestedOneWithoutDistrictsInput
    users?: UserCreateNestedManyWithoutDistrictInput
    policeStations?: PoliceStationCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateInput = {
    id?: number
    name: string
    provinceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDistrictInput
    policeStations?: PoliceStationUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneRequiredWithoutDistrictsNestedInput
    users?: UserUpdateManyWithoutDistrictNestedInput
    policeStations?: PoliceStationUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDistrictNestedInput
    policeStations?: PoliceStationUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictCreateManyInput = {
    id?: number
    name: string
    provinceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistrictUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoliceStationCreateInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    district: DistrictCreateNestedOneWithoutPoliceStationsInput
    tukTuks?: TukTukCreateNestedManyWithoutPoliceStationInput
    users?: UserCreateNestedManyWithoutStationInput
  }

  export type PoliceStationUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    districtId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tukTuks?: TukTukUncheckedCreateNestedManyWithoutPoliceStationInput
    users?: UserUncheckedCreateNestedManyWithoutStationInput
  }

  export type PoliceStationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneRequiredWithoutPoliceStationsNestedInput
    tukTuks?: TukTukUpdateManyWithoutPoliceStationNestedInput
    users?: UserUpdateManyWithoutStationNestedInput
  }

  export type PoliceStationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tukTuks?: TukTukUncheckedUpdateManyWithoutPoliceStationNestedInput
    users?: UserUncheckedUpdateManyWithoutStationNestedInput
  }

  export type PoliceStationCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    districtId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoliceStationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoliceStationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TukTukCreateInput = {
    registrationNumber: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policeStation: PoliceStationCreateNestedOneWithoutTukTuksInput
    locations?: LocationCreateNestedManyWithoutTukTukInput
    devices?: DeviceCreateNestedManyWithoutTukTukInput
  }

  export type TukTukUncheckedCreateInput = {
    id?: number
    registrationNumber: string
    name?: string | null
    policeStationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutTukTukInput
    devices?: DeviceUncheckedCreateNestedManyWithoutTukTukInput
  }

  export type TukTukUpdateInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policeStation?: PoliceStationUpdateOneRequiredWithoutTukTuksNestedInput
    locations?: LocationUpdateManyWithoutTukTukNestedInput
    devices?: DeviceUpdateManyWithoutTukTukNestedInput
  }

  export type TukTukUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    policeStationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutTukTukNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutTukTukNestedInput
  }

  export type TukTukCreateManyInput = {
    id?: number
    registrationNumber: string
    name?: string | null
    policeStationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TukTukUpdateManyMutationInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TukTukUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    policeStationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    name: string
    keyId: string
    secretHash: string
    isRevoked?: boolean
    rotatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tukTuk: TukTukCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    name: string
    keyId: string
    secretHash: string
    tukTukId: number
    isRevoked?: boolean
    rotatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    rotatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tukTuk?: TukTukUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    tukTukId?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    rotatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyInput = {
    id?: number
    name: string
    keyId: string
    secretHash: string
    tukTukId: number
    isRevoked?: boolean
    rotatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    rotatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    tukTukId?: IntFieldUpdateOperationsInput | number
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    rotatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    latitude: number
    longitude: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tukTuk: TukTukCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    tukTukId: number
    latitude: number
    longitude: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tukTuk?: TukTukUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tukTukId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyInput = {
    id?: number
    tukTukId: number
    latitude: number
    longitude: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tukTukId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProvinceNullableScalarRelationFilter = {
    is?: ProvinceWhereInput | null
    isNot?: ProvinceWhereInput | null
  }

  export type DistrictNullableScalarRelationFilter = {
    is?: DistrictWhereInput | null
    isNot?: DistrictWhereInput | null
  }

  export type PoliceStationNullableScalarRelationFilter = {
    is?: PoliceStationWhereInput | null
    isNot?: PoliceStationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provinceId?: SortOrder
    districtId?: SortOrder
    stationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    districtId?: SortOrder
    stationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provinceId?: SortOrder
    districtId?: SortOrder
    stationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provinceId?: SortOrder
    districtId?: SortOrder
    stationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
    districtId?: SortOrder
    stationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DistrictListRelationFilter = {
    every?: DistrictWhereInput
    some?: DistrictWhereInput
    none?: DistrictWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DistrictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProvinceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProvinceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinceScalarRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type PoliceStationListRelationFilter = {
    every?: PoliceStationWhereInput
    some?: PoliceStationWhereInput
    none?: PoliceStationWhereInput
  }

  export type PoliceStationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistrictAvgOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistrictSumOrderByAggregateInput = {
    id?: SortOrder
    provinceId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DistrictScalarRelationFilter = {
    is?: DistrictWhereInput
    isNot?: DistrictWhereInput
  }

  export type TukTukListRelationFilter = {
    every?: TukTukWhereInput
    some?: TukTukWhereInput
    none?: TukTukWhereInput
  }

  export type TukTukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoliceStationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoliceStationAvgOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
  }

  export type PoliceStationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoliceStationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    districtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoliceStationSumOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PoliceStationScalarRelationFilter = {
    is?: PoliceStationWhereInput
    isNot?: PoliceStationWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TukTukCountOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    policeStationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TukTukAvgOrderByAggregateInput = {
    id?: SortOrder
    policeStationId?: SortOrder
  }

  export type TukTukMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    policeStationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TukTukMinOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    name?: SortOrder
    policeStationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TukTukSumOrderByAggregateInput = {
    id?: SortOrder
    policeStationId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TukTukScalarRelationFilter = {
    is?: TukTukWhereInput
    isNot?: TukTukWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyId?: SortOrder
    secretHash?: SortOrder
    tukTukId?: SortOrder
    isRevoked?: SortOrder
    rotatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    tukTukId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyId?: SortOrder
    secretHash?: SortOrder
    tukTukId?: SortOrder
    isRevoked?: SortOrder
    rotatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyId?: SortOrder
    secretHash?: SortOrder
    tukTukId?: SortOrder
    isRevoked?: SortOrder
    rotatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    tukTukId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    tukTukId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    tukTukId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    tukTukId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    tukTukId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    tukTukId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProvinceCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutUsersInput
    connect?: ProvinceWhereUniqueInput
  }

  export type DistrictCreateNestedOneWithoutUsersInput = {
    create?: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutUsersInput
    connect?: DistrictWhereUniqueInput
  }

  export type PoliceStationCreateNestedOneWithoutUsersInput = {
    create?: XOR<PoliceStationCreateWithoutUsersInput, PoliceStationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PoliceStationCreateOrConnectWithoutUsersInput
    connect?: PoliceStationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProvinceUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutUsersInput
    upsert?: ProvinceUpsertWithoutUsersInput
    disconnect?: ProvinceWhereInput | boolean
    delete?: ProvinceWhereInput | boolean
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutUsersInput, ProvinceUpdateWithoutUsersInput>, ProvinceUncheckedUpdateWithoutUsersInput>
  }

  export type DistrictUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutUsersInput
    upsert?: DistrictUpsertWithoutUsersInput
    disconnect?: DistrictWhereInput | boolean
    delete?: DistrictWhereInput | boolean
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutUsersInput, DistrictUpdateWithoutUsersInput>, DistrictUncheckedUpdateWithoutUsersInput>
  }

  export type PoliceStationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PoliceStationCreateWithoutUsersInput, PoliceStationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PoliceStationCreateOrConnectWithoutUsersInput
    upsert?: PoliceStationUpsertWithoutUsersInput
    disconnect?: PoliceStationWhereInput | boolean
    delete?: PoliceStationWhereInput | boolean
    connect?: PoliceStationWhereUniqueInput
    update?: XOR<XOR<PoliceStationUpdateToOneWithWhereWithoutUsersInput, PoliceStationUpdateWithoutUsersInput>, PoliceStationUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DistrictCreateNestedManyWithoutProvinceInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutProvinceInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DistrictUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DistrictUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    upsert?: DistrictUpsertWithWhereUniqueWithoutProvinceInput | DistrictUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    set?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    disconnect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    delete?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    update?: DistrictUpdateWithWhereUniqueWithoutProvinceInput | DistrictUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: DistrictUpdateManyWithWhereWithoutProvinceInput | DistrictUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
  }

  export type UserUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProvinceInput | UserUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProvinceInput | UserUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProvinceInput | UserUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DistrictUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    upsert?: DistrictUpsertWithWhereUniqueWithoutProvinceInput | DistrictUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    set?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    disconnect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    delete?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    update?: DistrictUpdateWithWhereUniqueWithoutProvinceInput | DistrictUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: DistrictUpdateManyWithWhereWithoutProvinceInput | DistrictUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput> | UserCreateWithoutProvinceInput[] | UserUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProvinceInput | UserCreateOrConnectWithoutProvinceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProvinceInput | UserUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: UserCreateManyProvinceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProvinceInput | UserUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProvinceInput | UserUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProvinceCreateNestedOneWithoutDistrictsInput = {
    create?: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutDistrictsInput
    connect?: ProvinceWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutDistrictInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PoliceStationCreateNestedManyWithoutDistrictInput = {
    create?: XOR<PoliceStationCreateWithoutDistrictInput, PoliceStationUncheckedCreateWithoutDistrictInput> | PoliceStationCreateWithoutDistrictInput[] | PoliceStationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: PoliceStationCreateOrConnectWithoutDistrictInput | PoliceStationCreateOrConnectWithoutDistrictInput[]
    createMany?: PoliceStationCreateManyDistrictInputEnvelope
    connect?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PoliceStationUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<PoliceStationCreateWithoutDistrictInput, PoliceStationUncheckedCreateWithoutDistrictInput> | PoliceStationCreateWithoutDistrictInput[] | PoliceStationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: PoliceStationCreateOrConnectWithoutDistrictInput | PoliceStationCreateOrConnectWithoutDistrictInput[]
    createMany?: PoliceStationCreateManyDistrictInputEnvelope
    connect?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
  }

  export type ProvinceUpdateOneRequiredWithoutDistrictsNestedInput = {
    create?: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutDistrictsInput
    upsert?: ProvinceUpsertWithoutDistrictsInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutDistrictsInput, ProvinceUpdateWithoutDistrictsInput>, ProvinceUncheckedUpdateWithoutDistrictsInput>
  }

  export type UserUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDistrictInput | UserUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDistrictInput | UserUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDistrictInput | UserUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PoliceStationUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<PoliceStationCreateWithoutDistrictInput, PoliceStationUncheckedCreateWithoutDistrictInput> | PoliceStationCreateWithoutDistrictInput[] | PoliceStationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: PoliceStationCreateOrConnectWithoutDistrictInput | PoliceStationCreateOrConnectWithoutDistrictInput[]
    upsert?: PoliceStationUpsertWithWhereUniqueWithoutDistrictInput | PoliceStationUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: PoliceStationCreateManyDistrictInputEnvelope
    set?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    disconnect?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    delete?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    connect?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    update?: PoliceStationUpdateWithWhereUniqueWithoutDistrictInput | PoliceStationUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: PoliceStationUpdateManyWithWhereWithoutDistrictInput | PoliceStationUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: PoliceStationScalarWhereInput | PoliceStationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput> | UserCreateWithoutDistrictInput[] | UserUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistrictInput | UserCreateOrConnectWithoutDistrictInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDistrictInput | UserUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: UserCreateManyDistrictInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDistrictInput | UserUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDistrictInput | UserUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PoliceStationUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<PoliceStationCreateWithoutDistrictInput, PoliceStationUncheckedCreateWithoutDistrictInput> | PoliceStationCreateWithoutDistrictInput[] | PoliceStationUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: PoliceStationCreateOrConnectWithoutDistrictInput | PoliceStationCreateOrConnectWithoutDistrictInput[]
    upsert?: PoliceStationUpsertWithWhereUniqueWithoutDistrictInput | PoliceStationUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: PoliceStationCreateManyDistrictInputEnvelope
    set?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    disconnect?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    delete?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    connect?: PoliceStationWhereUniqueInput | PoliceStationWhereUniqueInput[]
    update?: PoliceStationUpdateWithWhereUniqueWithoutDistrictInput | PoliceStationUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: PoliceStationUpdateManyWithWhereWithoutDistrictInput | PoliceStationUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: PoliceStationScalarWhereInput | PoliceStationScalarWhereInput[]
  }

  export type DistrictCreateNestedOneWithoutPoliceStationsInput = {
    create?: XOR<DistrictCreateWithoutPoliceStationsInput, DistrictUncheckedCreateWithoutPoliceStationsInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutPoliceStationsInput
    connect?: DistrictWhereUniqueInput
  }

  export type TukTukCreateNestedManyWithoutPoliceStationInput = {
    create?: XOR<TukTukCreateWithoutPoliceStationInput, TukTukUncheckedCreateWithoutPoliceStationInput> | TukTukCreateWithoutPoliceStationInput[] | TukTukUncheckedCreateWithoutPoliceStationInput[]
    connectOrCreate?: TukTukCreateOrConnectWithoutPoliceStationInput | TukTukCreateOrConnectWithoutPoliceStationInput[]
    createMany?: TukTukCreateManyPoliceStationInputEnvelope
    connect?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutStationInput = {
    create?: XOR<UserCreateWithoutStationInput, UserUncheckedCreateWithoutStationInput> | UserCreateWithoutStationInput[] | UserUncheckedCreateWithoutStationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStationInput | UserCreateOrConnectWithoutStationInput[]
    createMany?: UserCreateManyStationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TukTukUncheckedCreateNestedManyWithoutPoliceStationInput = {
    create?: XOR<TukTukCreateWithoutPoliceStationInput, TukTukUncheckedCreateWithoutPoliceStationInput> | TukTukCreateWithoutPoliceStationInput[] | TukTukUncheckedCreateWithoutPoliceStationInput[]
    connectOrCreate?: TukTukCreateOrConnectWithoutPoliceStationInput | TukTukCreateOrConnectWithoutPoliceStationInput[]
    createMany?: TukTukCreateManyPoliceStationInputEnvelope
    connect?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<UserCreateWithoutStationInput, UserUncheckedCreateWithoutStationInput> | UserCreateWithoutStationInput[] | UserUncheckedCreateWithoutStationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStationInput | UserCreateOrConnectWithoutStationInput[]
    createMany?: UserCreateManyStationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DistrictUpdateOneRequiredWithoutPoliceStationsNestedInput = {
    create?: XOR<DistrictCreateWithoutPoliceStationsInput, DistrictUncheckedCreateWithoutPoliceStationsInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutPoliceStationsInput
    upsert?: DistrictUpsertWithoutPoliceStationsInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutPoliceStationsInput, DistrictUpdateWithoutPoliceStationsInput>, DistrictUncheckedUpdateWithoutPoliceStationsInput>
  }

  export type TukTukUpdateManyWithoutPoliceStationNestedInput = {
    create?: XOR<TukTukCreateWithoutPoliceStationInput, TukTukUncheckedCreateWithoutPoliceStationInput> | TukTukCreateWithoutPoliceStationInput[] | TukTukUncheckedCreateWithoutPoliceStationInput[]
    connectOrCreate?: TukTukCreateOrConnectWithoutPoliceStationInput | TukTukCreateOrConnectWithoutPoliceStationInput[]
    upsert?: TukTukUpsertWithWhereUniqueWithoutPoliceStationInput | TukTukUpsertWithWhereUniqueWithoutPoliceStationInput[]
    createMany?: TukTukCreateManyPoliceStationInputEnvelope
    set?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    disconnect?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    delete?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    connect?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    update?: TukTukUpdateWithWhereUniqueWithoutPoliceStationInput | TukTukUpdateWithWhereUniqueWithoutPoliceStationInput[]
    updateMany?: TukTukUpdateManyWithWhereWithoutPoliceStationInput | TukTukUpdateManyWithWhereWithoutPoliceStationInput[]
    deleteMany?: TukTukScalarWhereInput | TukTukScalarWhereInput[]
  }

  export type UserUpdateManyWithoutStationNestedInput = {
    create?: XOR<UserCreateWithoutStationInput, UserUncheckedCreateWithoutStationInput> | UserCreateWithoutStationInput[] | UserUncheckedCreateWithoutStationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStationInput | UserCreateOrConnectWithoutStationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutStationInput | UserUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: UserCreateManyStationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutStationInput | UserUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutStationInput | UserUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TukTukUncheckedUpdateManyWithoutPoliceStationNestedInput = {
    create?: XOR<TukTukCreateWithoutPoliceStationInput, TukTukUncheckedCreateWithoutPoliceStationInput> | TukTukCreateWithoutPoliceStationInput[] | TukTukUncheckedCreateWithoutPoliceStationInput[]
    connectOrCreate?: TukTukCreateOrConnectWithoutPoliceStationInput | TukTukCreateOrConnectWithoutPoliceStationInput[]
    upsert?: TukTukUpsertWithWhereUniqueWithoutPoliceStationInput | TukTukUpsertWithWhereUniqueWithoutPoliceStationInput[]
    createMany?: TukTukCreateManyPoliceStationInputEnvelope
    set?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    disconnect?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    delete?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    connect?: TukTukWhereUniqueInput | TukTukWhereUniqueInput[]
    update?: TukTukUpdateWithWhereUniqueWithoutPoliceStationInput | TukTukUpdateWithWhereUniqueWithoutPoliceStationInput[]
    updateMany?: TukTukUpdateManyWithWhereWithoutPoliceStationInput | TukTukUpdateManyWithWhereWithoutPoliceStationInput[]
    deleteMany?: TukTukScalarWhereInput | TukTukScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<UserCreateWithoutStationInput, UserUncheckedCreateWithoutStationInput> | UserCreateWithoutStationInput[] | UserUncheckedCreateWithoutStationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutStationInput | UserCreateOrConnectWithoutStationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutStationInput | UserUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: UserCreateManyStationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutStationInput | UserUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutStationInput | UserUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PoliceStationCreateNestedOneWithoutTukTuksInput = {
    create?: XOR<PoliceStationCreateWithoutTukTuksInput, PoliceStationUncheckedCreateWithoutTukTuksInput>
    connectOrCreate?: PoliceStationCreateOrConnectWithoutTukTuksInput
    connect?: PoliceStationWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutTukTukInput = {
    create?: XOR<LocationCreateWithoutTukTukInput, LocationUncheckedCreateWithoutTukTukInput> | LocationCreateWithoutTukTukInput[] | LocationUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTukTukInput | LocationCreateOrConnectWithoutTukTukInput[]
    createMany?: LocationCreateManyTukTukInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutTukTukInput = {
    create?: XOR<DeviceCreateWithoutTukTukInput, DeviceUncheckedCreateWithoutTukTukInput> | DeviceCreateWithoutTukTukInput[] | DeviceUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTukTukInput | DeviceCreateOrConnectWithoutTukTukInput[]
    createMany?: DeviceCreateManyTukTukInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutTukTukInput = {
    create?: XOR<LocationCreateWithoutTukTukInput, LocationUncheckedCreateWithoutTukTukInput> | LocationCreateWithoutTukTukInput[] | LocationUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTukTukInput | LocationCreateOrConnectWithoutTukTukInput[]
    createMany?: LocationCreateManyTukTukInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutTukTukInput = {
    create?: XOR<DeviceCreateWithoutTukTukInput, DeviceUncheckedCreateWithoutTukTukInput> | DeviceCreateWithoutTukTukInput[] | DeviceUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTukTukInput | DeviceCreateOrConnectWithoutTukTukInput[]
    createMany?: DeviceCreateManyTukTukInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type PoliceStationUpdateOneRequiredWithoutTukTuksNestedInput = {
    create?: XOR<PoliceStationCreateWithoutTukTuksInput, PoliceStationUncheckedCreateWithoutTukTuksInput>
    connectOrCreate?: PoliceStationCreateOrConnectWithoutTukTuksInput
    upsert?: PoliceStationUpsertWithoutTukTuksInput
    connect?: PoliceStationWhereUniqueInput
    update?: XOR<XOR<PoliceStationUpdateToOneWithWhereWithoutTukTuksInput, PoliceStationUpdateWithoutTukTuksInput>, PoliceStationUncheckedUpdateWithoutTukTuksInput>
  }

  export type LocationUpdateManyWithoutTukTukNestedInput = {
    create?: XOR<LocationCreateWithoutTukTukInput, LocationUncheckedCreateWithoutTukTukInput> | LocationCreateWithoutTukTukInput[] | LocationUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTukTukInput | LocationCreateOrConnectWithoutTukTukInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutTukTukInput | LocationUpsertWithWhereUniqueWithoutTukTukInput[]
    createMany?: LocationCreateManyTukTukInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutTukTukInput | LocationUpdateWithWhereUniqueWithoutTukTukInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutTukTukInput | LocationUpdateManyWithWhereWithoutTukTukInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutTukTukNestedInput = {
    create?: XOR<DeviceCreateWithoutTukTukInput, DeviceUncheckedCreateWithoutTukTukInput> | DeviceCreateWithoutTukTukInput[] | DeviceUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTukTukInput | DeviceCreateOrConnectWithoutTukTukInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTukTukInput | DeviceUpsertWithWhereUniqueWithoutTukTukInput[]
    createMany?: DeviceCreateManyTukTukInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTukTukInput | DeviceUpdateWithWhereUniqueWithoutTukTukInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTukTukInput | DeviceUpdateManyWithWhereWithoutTukTukInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutTukTukNestedInput = {
    create?: XOR<LocationCreateWithoutTukTukInput, LocationUncheckedCreateWithoutTukTukInput> | LocationCreateWithoutTukTukInput[] | LocationUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutTukTukInput | LocationCreateOrConnectWithoutTukTukInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutTukTukInput | LocationUpsertWithWhereUniqueWithoutTukTukInput[]
    createMany?: LocationCreateManyTukTukInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutTukTukInput | LocationUpdateWithWhereUniqueWithoutTukTukInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutTukTukInput | LocationUpdateManyWithWhereWithoutTukTukInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutTukTukNestedInput = {
    create?: XOR<DeviceCreateWithoutTukTukInput, DeviceUncheckedCreateWithoutTukTukInput> | DeviceCreateWithoutTukTukInput[] | DeviceUncheckedCreateWithoutTukTukInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTukTukInput | DeviceCreateOrConnectWithoutTukTukInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTukTukInput | DeviceUpsertWithWhereUniqueWithoutTukTukInput[]
    createMany?: DeviceCreateManyTukTukInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTukTukInput | DeviceUpdateWithWhereUniqueWithoutTukTukInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTukTukInput | DeviceUpdateManyWithWhereWithoutTukTukInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type TukTukCreateNestedOneWithoutDevicesInput = {
    create?: XOR<TukTukCreateWithoutDevicesInput, TukTukUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: TukTukCreateOrConnectWithoutDevicesInput
    connect?: TukTukWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TukTukUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<TukTukCreateWithoutDevicesInput, TukTukUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: TukTukCreateOrConnectWithoutDevicesInput
    upsert?: TukTukUpsertWithoutDevicesInput
    connect?: TukTukWhereUniqueInput
    update?: XOR<XOR<TukTukUpdateToOneWithWhereWithoutDevicesInput, TukTukUpdateWithoutDevicesInput>, TukTukUncheckedUpdateWithoutDevicesInput>
  }

  export type TukTukCreateNestedOneWithoutLocationsInput = {
    create?: XOR<TukTukCreateWithoutLocationsInput, TukTukUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: TukTukCreateOrConnectWithoutLocationsInput
    connect?: TukTukWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TukTukUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<TukTukCreateWithoutLocationsInput, TukTukUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: TukTukCreateOrConnectWithoutLocationsInput
    upsert?: TukTukUpsertWithoutLocationsInput
    connect?: TukTukWhereUniqueInput
    update?: XOR<XOR<TukTukUpdateToOneWithWhereWithoutLocationsInput, TukTukUpdateWithoutLocationsInput>, TukTukUncheckedUpdateWithoutLocationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProvinceCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    districts?: DistrictCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    districts?: DistrictUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutUsersInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
  }

  export type DistrictCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    province: ProvinceCreateNestedOneWithoutDistrictsInput
    policeStations?: PoliceStationCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    provinceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    policeStations?: PoliceStationUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutUsersInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
  }

  export type PoliceStationCreateWithoutUsersInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    district: DistrictCreateNestedOneWithoutPoliceStationsInput
    tukTuks?: TukTukCreateNestedManyWithoutPoliceStationInput
  }

  export type PoliceStationUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    address?: string | null
    districtId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tukTuks?: TukTukUncheckedCreateNestedManyWithoutPoliceStationInput
  }

  export type PoliceStationCreateOrConnectWithoutUsersInput = {
    where: PoliceStationWhereUniqueInput
    create: XOR<PoliceStationCreateWithoutUsersInput, PoliceStationUncheckedCreateWithoutUsersInput>
  }

  export type ProvinceUpsertWithoutUsersInput = {
    update: XOR<ProvinceUpdateWithoutUsersInput, ProvinceUncheckedUpdateWithoutUsersInput>
    create: XOR<ProvinceCreateWithoutUsersInput, ProvinceUncheckedCreateWithoutUsersInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutUsersInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutUsersInput, ProvinceUncheckedUpdateWithoutUsersInput>
  }

  export type ProvinceUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    districts?: DistrictUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    districts?: DistrictUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type DistrictUpsertWithoutUsersInput = {
    update: XOR<DistrictUpdateWithoutUsersInput, DistrictUncheckedUpdateWithoutUsersInput>
    create: XOR<DistrictCreateWithoutUsersInput, DistrictUncheckedCreateWithoutUsersInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutUsersInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutUsersInput, DistrictUncheckedUpdateWithoutUsersInput>
  }

  export type DistrictUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneRequiredWithoutDistrictsNestedInput
    policeStations?: PoliceStationUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policeStations?: PoliceStationUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type PoliceStationUpsertWithoutUsersInput = {
    update: XOR<PoliceStationUpdateWithoutUsersInput, PoliceStationUncheckedUpdateWithoutUsersInput>
    create: XOR<PoliceStationCreateWithoutUsersInput, PoliceStationUncheckedCreateWithoutUsersInput>
    where?: PoliceStationWhereInput
  }

  export type PoliceStationUpdateToOneWithWhereWithoutUsersInput = {
    where?: PoliceStationWhereInput
    data: XOR<PoliceStationUpdateWithoutUsersInput, PoliceStationUncheckedUpdateWithoutUsersInput>
  }

  export type PoliceStationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneRequiredWithoutPoliceStationsNestedInput
    tukTuks?: TukTukUpdateManyWithoutPoliceStationNestedInput
  }

  export type PoliceStationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tukTuks?: TukTukUncheckedUpdateManyWithoutPoliceStationNestedInput
  }

  export type DistrictCreateWithoutProvinceInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutDistrictInput
    policeStations?: PoliceStationCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutProvinceInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDistrictInput
    policeStations?: PoliceStationUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput>
  }

  export type DistrictCreateManyProvinceInputEnvelope = {
    data: DistrictCreateManyProvinceInput | DistrictCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProvinceInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    district?: DistrictCreateNestedOneWithoutUsersInput
    station?: PoliceStationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutProvinceInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    districtId?: number | null
    stationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProvinceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput>
  }

  export type UserCreateManyProvinceInputEnvelope = {
    data: UserCreateManyProvinceInput | UserCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type DistrictUpsertWithWhereUniqueWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    update: XOR<DistrictUpdateWithoutProvinceInput, DistrictUncheckedUpdateWithoutProvinceInput>
    create: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput>
  }

  export type DistrictUpdateWithWhereUniqueWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    data: XOR<DistrictUpdateWithoutProvinceInput, DistrictUncheckedUpdateWithoutProvinceInput>
  }

  export type DistrictUpdateManyWithWhereWithoutProvinceInput = {
    where: DistrictScalarWhereInput
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyWithoutProvinceInput>
  }

  export type DistrictScalarWhereInput = {
    AND?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
    OR?: DistrictScalarWhereInput[]
    NOT?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
    id?: IntFilter<"District"> | number
    name?: StringFilter<"District"> | string
    provinceId?: IntFilter<"District"> | number
    createdAt?: DateTimeFilter<"District"> | Date | string
    updatedAt?: DateTimeFilter<"District"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutProvinceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProvinceInput, UserUncheckedUpdateWithoutProvinceInput>
    create: XOR<UserCreateWithoutProvinceInput, UserUncheckedCreateWithoutProvinceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProvinceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProvinceInput, UserUncheckedUpdateWithoutProvinceInput>
  }

  export type UserUpdateManyWithWhereWithoutProvinceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProvinceInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    provinceId?: IntNullableFilter<"User"> | number | null
    districtId?: IntNullableFilter<"User"> | number | null
    stationId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProvinceCreateWithoutDistrictsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutDistrictsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutDistrictsInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
  }

  export type UserCreateWithoutDistrictInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    province?: ProvinceCreateNestedOneWithoutUsersInput
    station?: PoliceStationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDistrictInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    provinceId?: number | null
    stationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDistrictInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput>
  }

  export type UserCreateManyDistrictInputEnvelope = {
    data: UserCreateManyDistrictInput | UserCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type PoliceStationCreateWithoutDistrictInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tukTuks?: TukTukCreateNestedManyWithoutPoliceStationInput
    users?: UserCreateNestedManyWithoutStationInput
  }

  export type PoliceStationUncheckedCreateWithoutDistrictInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tukTuks?: TukTukUncheckedCreateNestedManyWithoutPoliceStationInput
    users?: UserUncheckedCreateNestedManyWithoutStationInput
  }

  export type PoliceStationCreateOrConnectWithoutDistrictInput = {
    where: PoliceStationWhereUniqueInput
    create: XOR<PoliceStationCreateWithoutDistrictInput, PoliceStationUncheckedCreateWithoutDistrictInput>
  }

  export type PoliceStationCreateManyDistrictInputEnvelope = {
    data: PoliceStationCreateManyDistrictInput | PoliceStationCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithoutDistrictsInput = {
    update: XOR<ProvinceUpdateWithoutDistrictsInput, ProvinceUncheckedUpdateWithoutDistrictsInput>
    create: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutDistrictsInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutDistrictsInput, ProvinceUncheckedUpdateWithoutDistrictsInput>
  }

  export type ProvinceUpdateWithoutDistrictsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutDistrictsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutDistrictInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDistrictInput, UserUncheckedUpdateWithoutDistrictInput>
    create: XOR<UserCreateWithoutDistrictInput, UserUncheckedCreateWithoutDistrictInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDistrictInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDistrictInput, UserUncheckedUpdateWithoutDistrictInput>
  }

  export type UserUpdateManyWithWhereWithoutDistrictInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDistrictInput>
  }

  export type PoliceStationUpsertWithWhereUniqueWithoutDistrictInput = {
    where: PoliceStationWhereUniqueInput
    update: XOR<PoliceStationUpdateWithoutDistrictInput, PoliceStationUncheckedUpdateWithoutDistrictInput>
    create: XOR<PoliceStationCreateWithoutDistrictInput, PoliceStationUncheckedCreateWithoutDistrictInput>
  }

  export type PoliceStationUpdateWithWhereUniqueWithoutDistrictInput = {
    where: PoliceStationWhereUniqueInput
    data: XOR<PoliceStationUpdateWithoutDistrictInput, PoliceStationUncheckedUpdateWithoutDistrictInput>
  }

  export type PoliceStationUpdateManyWithWhereWithoutDistrictInput = {
    where: PoliceStationScalarWhereInput
    data: XOR<PoliceStationUpdateManyMutationInput, PoliceStationUncheckedUpdateManyWithoutDistrictInput>
  }

  export type PoliceStationScalarWhereInput = {
    AND?: PoliceStationScalarWhereInput | PoliceStationScalarWhereInput[]
    OR?: PoliceStationScalarWhereInput[]
    NOT?: PoliceStationScalarWhereInput | PoliceStationScalarWhereInput[]
    id?: IntFilter<"PoliceStation"> | number
    name?: StringFilter<"PoliceStation"> | string
    address?: StringNullableFilter<"PoliceStation"> | string | null
    districtId?: IntFilter<"PoliceStation"> | number
    createdAt?: DateTimeFilter<"PoliceStation"> | Date | string
    updatedAt?: DateTimeFilter<"PoliceStation"> | Date | string
  }

  export type DistrictCreateWithoutPoliceStationsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    province: ProvinceCreateNestedOneWithoutDistrictsInput
    users?: UserCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutPoliceStationsInput = {
    id?: number
    name: string
    provinceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutPoliceStationsInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutPoliceStationsInput, DistrictUncheckedCreateWithoutPoliceStationsInput>
  }

  export type TukTukCreateWithoutPoliceStationInput = {
    registrationNumber: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutTukTukInput
    devices?: DeviceCreateNestedManyWithoutTukTukInput
  }

  export type TukTukUncheckedCreateWithoutPoliceStationInput = {
    id?: number
    registrationNumber: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutTukTukInput
    devices?: DeviceUncheckedCreateNestedManyWithoutTukTukInput
  }

  export type TukTukCreateOrConnectWithoutPoliceStationInput = {
    where: TukTukWhereUniqueInput
    create: XOR<TukTukCreateWithoutPoliceStationInput, TukTukUncheckedCreateWithoutPoliceStationInput>
  }

  export type TukTukCreateManyPoliceStationInputEnvelope = {
    data: TukTukCreateManyPoliceStationInput | TukTukCreateManyPoliceStationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStationInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    province?: ProvinceCreateNestedOneWithoutUsersInput
    district?: DistrictCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutStationInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    provinceId?: number | null
    districtId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutStationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStationInput, UserUncheckedCreateWithoutStationInput>
  }

  export type UserCreateManyStationInputEnvelope = {
    data: UserCreateManyStationInput | UserCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type DistrictUpsertWithoutPoliceStationsInput = {
    update: XOR<DistrictUpdateWithoutPoliceStationsInput, DistrictUncheckedUpdateWithoutPoliceStationsInput>
    create: XOR<DistrictCreateWithoutPoliceStationsInput, DistrictUncheckedCreateWithoutPoliceStationsInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutPoliceStationsInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutPoliceStationsInput, DistrictUncheckedUpdateWithoutPoliceStationsInput>
  }

  export type DistrictUpdateWithoutPoliceStationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneRequiredWithoutDistrictsNestedInput
    users?: UserUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutPoliceStationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type TukTukUpsertWithWhereUniqueWithoutPoliceStationInput = {
    where: TukTukWhereUniqueInput
    update: XOR<TukTukUpdateWithoutPoliceStationInput, TukTukUncheckedUpdateWithoutPoliceStationInput>
    create: XOR<TukTukCreateWithoutPoliceStationInput, TukTukUncheckedCreateWithoutPoliceStationInput>
  }

  export type TukTukUpdateWithWhereUniqueWithoutPoliceStationInput = {
    where: TukTukWhereUniqueInput
    data: XOR<TukTukUpdateWithoutPoliceStationInput, TukTukUncheckedUpdateWithoutPoliceStationInput>
  }

  export type TukTukUpdateManyWithWhereWithoutPoliceStationInput = {
    where: TukTukScalarWhereInput
    data: XOR<TukTukUpdateManyMutationInput, TukTukUncheckedUpdateManyWithoutPoliceStationInput>
  }

  export type TukTukScalarWhereInput = {
    AND?: TukTukScalarWhereInput | TukTukScalarWhereInput[]
    OR?: TukTukScalarWhereInput[]
    NOT?: TukTukScalarWhereInput | TukTukScalarWhereInput[]
    id?: IntFilter<"TukTuk"> | number
    registrationNumber?: StringFilter<"TukTuk"> | string
    name?: StringNullableFilter<"TukTuk"> | string | null
    policeStationId?: IntFilter<"TukTuk"> | number
    createdAt?: DateTimeFilter<"TukTuk"> | Date | string
    updatedAt?: DateTimeFilter<"TukTuk"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutStationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutStationInput, UserUncheckedUpdateWithoutStationInput>
    create: XOR<UserCreateWithoutStationInput, UserUncheckedCreateWithoutStationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutStationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutStationInput, UserUncheckedUpdateWithoutStationInput>
  }

  export type UserUpdateManyWithWhereWithoutStationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutStationInput>
  }

  export type PoliceStationCreateWithoutTukTuksInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    district: DistrictCreateNestedOneWithoutPoliceStationsInput
    users?: UserCreateNestedManyWithoutStationInput
  }

  export type PoliceStationUncheckedCreateWithoutTukTuksInput = {
    id?: number
    name: string
    address?: string | null
    districtId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutStationInput
  }

  export type PoliceStationCreateOrConnectWithoutTukTuksInput = {
    where: PoliceStationWhereUniqueInput
    create: XOR<PoliceStationCreateWithoutTukTuksInput, PoliceStationUncheckedCreateWithoutTukTuksInput>
  }

  export type LocationCreateWithoutTukTukInput = {
    latitude: number
    longitude: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutTukTukInput = {
    id?: number
    latitude: number
    longitude: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutTukTukInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutTukTukInput, LocationUncheckedCreateWithoutTukTukInput>
  }

  export type LocationCreateManyTukTukInputEnvelope = {
    data: LocationCreateManyTukTukInput | LocationCreateManyTukTukInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutTukTukInput = {
    name: string
    keyId: string
    secretHash: string
    isRevoked?: boolean
    rotatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUncheckedCreateWithoutTukTukInput = {
    id?: number
    name: string
    keyId: string
    secretHash: string
    isRevoked?: boolean
    rotatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutTukTukInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutTukTukInput, DeviceUncheckedCreateWithoutTukTukInput>
  }

  export type DeviceCreateManyTukTukInputEnvelope = {
    data: DeviceCreateManyTukTukInput | DeviceCreateManyTukTukInput[]
    skipDuplicates?: boolean
  }

  export type PoliceStationUpsertWithoutTukTuksInput = {
    update: XOR<PoliceStationUpdateWithoutTukTuksInput, PoliceStationUncheckedUpdateWithoutTukTuksInput>
    create: XOR<PoliceStationCreateWithoutTukTuksInput, PoliceStationUncheckedCreateWithoutTukTuksInput>
    where?: PoliceStationWhereInput
  }

  export type PoliceStationUpdateToOneWithWhereWithoutTukTuksInput = {
    where?: PoliceStationWhereInput
    data: XOR<PoliceStationUpdateWithoutTukTuksInput, PoliceStationUncheckedUpdateWithoutTukTuksInput>
  }

  export type PoliceStationUpdateWithoutTukTuksInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneRequiredWithoutPoliceStationsNestedInput
    users?: UserUpdateManyWithoutStationNestedInput
  }

  export type PoliceStationUncheckedUpdateWithoutTukTuksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    districtId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutStationNestedInput
  }

  export type LocationUpsertWithWhereUniqueWithoutTukTukInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutTukTukInput, LocationUncheckedUpdateWithoutTukTukInput>
    create: XOR<LocationCreateWithoutTukTukInput, LocationUncheckedCreateWithoutTukTukInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutTukTukInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutTukTukInput, LocationUncheckedUpdateWithoutTukTukInput>
  }

  export type LocationUpdateManyWithWhereWithoutTukTukInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutTukTukInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: IntFilter<"Location"> | number
    tukTukId?: IntFilter<"Location"> | number
    latitude?: FloatFilter<"Location"> | number
    longitude?: FloatFilter<"Location"> | number
    recordedAt?: DateTimeFilter<"Location"> | Date | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutTukTukInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutTukTukInput, DeviceUncheckedUpdateWithoutTukTukInput>
    create: XOR<DeviceCreateWithoutTukTukInput, DeviceUncheckedCreateWithoutTukTukInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutTukTukInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutTukTukInput, DeviceUncheckedUpdateWithoutTukTukInput>
  }

  export type DeviceUpdateManyWithWhereWithoutTukTukInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutTukTukInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    keyId?: StringFilter<"Device"> | string
    secretHash?: StringFilter<"Device"> | string
    tukTukId?: IntFilter<"Device"> | number
    isRevoked?: BoolFilter<"Device"> | boolean
    rotatedAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type TukTukCreateWithoutDevicesInput = {
    registrationNumber: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policeStation: PoliceStationCreateNestedOneWithoutTukTuksInput
    locations?: LocationCreateNestedManyWithoutTukTukInput
  }

  export type TukTukUncheckedCreateWithoutDevicesInput = {
    id?: number
    registrationNumber: string
    name?: string | null
    policeStationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutTukTukInput
  }

  export type TukTukCreateOrConnectWithoutDevicesInput = {
    where: TukTukWhereUniqueInput
    create: XOR<TukTukCreateWithoutDevicesInput, TukTukUncheckedCreateWithoutDevicesInput>
  }

  export type TukTukUpsertWithoutDevicesInput = {
    update: XOR<TukTukUpdateWithoutDevicesInput, TukTukUncheckedUpdateWithoutDevicesInput>
    create: XOR<TukTukCreateWithoutDevicesInput, TukTukUncheckedCreateWithoutDevicesInput>
    where?: TukTukWhereInput
  }

  export type TukTukUpdateToOneWithWhereWithoutDevicesInput = {
    where?: TukTukWhereInput
    data: XOR<TukTukUpdateWithoutDevicesInput, TukTukUncheckedUpdateWithoutDevicesInput>
  }

  export type TukTukUpdateWithoutDevicesInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policeStation?: PoliceStationUpdateOneRequiredWithoutTukTuksNestedInput
    locations?: LocationUpdateManyWithoutTukTukNestedInput
  }

  export type TukTukUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    policeStationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutTukTukNestedInput
  }

  export type TukTukCreateWithoutLocationsInput = {
    registrationNumber: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policeStation: PoliceStationCreateNestedOneWithoutTukTuksInput
    devices?: DeviceCreateNestedManyWithoutTukTukInput
  }

  export type TukTukUncheckedCreateWithoutLocationsInput = {
    id?: number
    registrationNumber: string
    name?: string | null
    policeStationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutTukTukInput
  }

  export type TukTukCreateOrConnectWithoutLocationsInput = {
    where: TukTukWhereUniqueInput
    create: XOR<TukTukCreateWithoutLocationsInput, TukTukUncheckedCreateWithoutLocationsInput>
  }

  export type TukTukUpsertWithoutLocationsInput = {
    update: XOR<TukTukUpdateWithoutLocationsInput, TukTukUncheckedUpdateWithoutLocationsInput>
    create: XOR<TukTukCreateWithoutLocationsInput, TukTukUncheckedCreateWithoutLocationsInput>
    where?: TukTukWhereInput
  }

  export type TukTukUpdateToOneWithWhereWithoutLocationsInput = {
    where?: TukTukWhereInput
    data: XOR<TukTukUpdateWithoutLocationsInput, TukTukUncheckedUpdateWithoutLocationsInput>
  }

  export type TukTukUpdateWithoutLocationsInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policeStation?: PoliceStationUpdateOneRequiredWithoutTukTuksNestedInput
    devices?: DeviceUpdateManyWithoutTukTukNestedInput
  }

  export type TukTukUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    policeStationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutTukTukNestedInput
  }

  export type DistrictCreateManyProvinceInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyProvinceInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    districtId?: number | null
    stationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistrictUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDistrictNestedInput
    policeStations?: PoliceStationUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDistrictNestedInput
    policeStations?: PoliceStationUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    district?: DistrictUpdateOneWithoutUsersNestedInput
    station?: PoliceStationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    stationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    stationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyDistrictInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    provinceId?: number | null
    stationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoliceStationCreateManyDistrictInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutDistrictInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneWithoutUsersNestedInput
    station?: PoliceStationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    stationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    stationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoliceStationUpdateWithoutDistrictInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tukTuks?: TukTukUpdateManyWithoutPoliceStationNestedInput
    users?: UserUpdateManyWithoutStationNestedInput
  }

  export type PoliceStationUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tukTuks?: TukTukUncheckedUpdateManyWithoutPoliceStationNestedInput
    users?: UserUncheckedUpdateManyWithoutStationNestedInput
  }

  export type PoliceStationUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TukTukCreateManyPoliceStationInput = {
    id?: number
    registrationNumber: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyStationInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    provinceId?: number | null
    districtId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TukTukUpdateWithoutPoliceStationInput = {
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutTukTukNestedInput
    devices?: DeviceUpdateManyWithoutTukTukNestedInput
  }

  export type TukTukUncheckedUpdateWithoutPoliceStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutTukTukNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutTukTukNestedInput
  }

  export type TukTukUncheckedUpdateManyWithoutPoliceStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutStationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvinceUpdateOneWithoutUsersNestedInput
    district?: DistrictUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyTukTukInput = {
    id?: number
    latitude: number
    longitude: number
    recordedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateManyTukTukInput = {
    id?: number
    name: string
    keyId: string
    secretHash: string
    isRevoked?: boolean
    rotatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateWithoutTukTukInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutTukTukInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyWithoutTukTukInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutTukTukInput = {
    name?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    rotatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateWithoutTukTukInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    rotatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyWithoutTukTukInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    keyId?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    rotatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}