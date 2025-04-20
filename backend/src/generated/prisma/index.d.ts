
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Leaf
 * 
 */
export type Leaf = $Result.DefaultSelection<Prisma.$LeafPayload>
/**
 * Model LeafLink
 * 
 */
export type LeafLink = $Result.DefaultSelection<Prisma.$LeafLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.leaf`: Exposes CRUD operations for the **Leaf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leaf.findMany()
    * ```
    */
  get leaf(): Prisma.LeafDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leafLink`: Exposes CRUD operations for the **LeafLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeafLinks
    * const leafLinks = await prisma.leafLink.findMany()
    * ```
    */
  get leafLink(): Prisma.LeafLinkDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Leaf: 'Leaf',
    LeafLink: 'LeafLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "leaf" | "leafLink"
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
      Leaf: {
        payload: Prisma.$LeafPayload<ExtArgs>
        fields: Prisma.LeafFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeafFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeafFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>
          }
          findFirst: {
            args: Prisma.LeafFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeafFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>
          }
          findMany: {
            args: Prisma.LeafFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>[]
          }
          create: {
            args: Prisma.LeafCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>
          }
          createMany: {
            args: Prisma.LeafCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeafCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>[]
          }
          delete: {
            args: Prisma.LeafDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>
          }
          update: {
            args: Prisma.LeafUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>
          }
          deleteMany: {
            args: Prisma.LeafDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeafUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeafUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>[]
          }
          upsert: {
            args: Prisma.LeafUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafPayload>
          }
          aggregate: {
            args: Prisma.LeafAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaf>
          }
          groupBy: {
            args: Prisma.LeafGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeafGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeafCountArgs<ExtArgs>
            result: $Utils.Optional<LeafCountAggregateOutputType> | number
          }
        }
      }
      LeafLink: {
        payload: Prisma.$LeafLinkPayload<ExtArgs>
        fields: Prisma.LeafLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeafLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeafLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>
          }
          findFirst: {
            args: Prisma.LeafLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeafLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>
          }
          findMany: {
            args: Prisma.LeafLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>[]
          }
          create: {
            args: Prisma.LeafLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>
          }
          createMany: {
            args: Prisma.LeafLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeafLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>[]
          }
          delete: {
            args: Prisma.LeafLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>
          }
          update: {
            args: Prisma.LeafLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>
          }
          deleteMany: {
            args: Prisma.LeafLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeafLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeafLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>[]
          }
          upsert: {
            args: Prisma.LeafLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeafLinkPayload>
          }
          aggregate: {
            args: Prisma.LeafLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeafLink>
          }
          groupBy: {
            args: Prisma.LeafLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeafLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeafLinkCountArgs<ExtArgs>
            result: $Utils.Optional<LeafLinkCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    leaf?: LeafOmit
    leafLink?: LeafLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leaves: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | UserCountOutputTypeCountLeavesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeafWhereInput
  }


  /**
   * Count Type LeafCountOutputType
   */

  export type LeafCountOutputType = {
    linkedTo: number
    linkedFrom: number
  }

  export type LeafCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedTo?: boolean | LeafCountOutputTypeCountLinkedToArgs
    linkedFrom?: boolean | LeafCountOutputTypeCountLinkedFromArgs
  }

  // Custom InputTypes
  /**
   * LeafCountOutputType without action
   */
  export type LeafCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafCountOutputType
     */
    select?: LeafCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeafCountOutputType without action
   */
  export type LeafCountOutputTypeCountLinkedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeafLinkWhereInput
  }

  /**
   * LeafCountOutputType without action
   */
  export type LeafCountOutputTypeCountLinkedFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeafLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leaves?: boolean | User$leavesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | User$leavesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leaves: Prisma.$LeafPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
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
    leaves<T extends User$leavesArgs<ExtArgs> = {}>(args?: Subset<T, User$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User.leaves
   */
  export type User$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    where?: LeafWhereInput
    orderBy?: LeafOrderByWithRelationInput | LeafOrderByWithRelationInput[]
    cursor?: LeafWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeafScalarFieldEnum | LeafScalarFieldEnum[]
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
   * Model Leaf
   */

  export type AggregateLeaf = {
    _count: LeafCountAggregateOutputType | null
    _min: LeafMinAggregateOutputType | null
    _max: LeafMaxAggregateOutputType | null
  }

  export type LeafMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type LeafMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type LeafCountAggregateOutputType = {
    id: number
    title: number
    content: number
    tags: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type LeafMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type LeafMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type LeafCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type LeafAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaf to aggregate.
     */
    where?: LeafWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeafOrderByWithRelationInput | LeafOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeafWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeafCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeafMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeafMaxAggregateInputType
  }

  export type GetLeafAggregateType<T extends LeafAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaf[P]>
      : GetScalarType<T[P], AggregateLeaf[P]>
  }




  export type LeafGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeafWhereInput
    orderBy?: LeafOrderByWithAggregationInput | LeafOrderByWithAggregationInput[]
    by: LeafScalarFieldEnum[] | LeafScalarFieldEnum
    having?: LeafScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeafCountAggregateInputType | true
    _min?: LeafMinAggregateInputType
    _max?: LeafMaxAggregateInputType
  }

  export type LeafGroupByOutputType = {
    id: string
    title: string
    content: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: LeafCountAggregateOutputType | null
    _min: LeafMinAggregateOutputType | null
    _max: LeafMaxAggregateOutputType | null
  }

  type GetLeafGroupByPayload<T extends LeafGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeafGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeafGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeafGroupByOutputType[P]>
            : GetScalarType<T[P], LeafGroupByOutputType[P]>
        }
      >
    >


  export type LeafSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    linkedTo?: boolean | Leaf$linkedToArgs<ExtArgs>
    linkedFrom?: boolean | Leaf$linkedFromArgs<ExtArgs>
    _count?: boolean | LeafCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaf"]>

  export type LeafSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaf"]>

  export type LeafSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaf"]>

  export type LeafSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type LeafOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "tags" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["leaf"]>
  export type LeafInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    linkedTo?: boolean | Leaf$linkedToArgs<ExtArgs>
    linkedFrom?: boolean | Leaf$linkedFromArgs<ExtArgs>
    _count?: boolean | LeafCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeafIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeafIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeafPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leaf"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      linkedTo: Prisma.$LeafLinkPayload<ExtArgs>[]
      linkedFrom: Prisma.$LeafLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      tags: string[]
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["leaf"]>
    composites: {}
  }

  type LeafGetPayload<S extends boolean | null | undefined | LeafDefaultArgs> = $Result.GetResult<Prisma.$LeafPayload, S>

  type LeafCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeafFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeafCountAggregateInputType | true
    }

  export interface LeafDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leaf'], meta: { name: 'Leaf' } }
    /**
     * Find zero or one Leaf that matches the filter.
     * @param {LeafFindUniqueArgs} args - Arguments to find a Leaf
     * @example
     * // Get one Leaf
     * const leaf = await prisma.leaf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeafFindUniqueArgs>(args: SelectSubset<T, LeafFindUniqueArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leaf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeafFindUniqueOrThrowArgs} args - Arguments to find a Leaf
     * @example
     * // Get one Leaf
     * const leaf = await prisma.leaf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeafFindUniqueOrThrowArgs>(args: SelectSubset<T, LeafFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFindFirstArgs} args - Arguments to find a Leaf
     * @example
     * // Get one Leaf
     * const leaf = await prisma.leaf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeafFindFirstArgs>(args?: SelectSubset<T, LeafFindFirstArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFindFirstOrThrowArgs} args - Arguments to find a Leaf
     * @example
     * // Get one Leaf
     * const leaf = await prisma.leaf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeafFindFirstOrThrowArgs>(args?: SelectSubset<T, LeafFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leaf.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leaf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leafWithIdOnly = await prisma.leaf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeafFindManyArgs>(args?: SelectSubset<T, LeafFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leaf.
     * @param {LeafCreateArgs} args - Arguments to create a Leaf.
     * @example
     * // Create one Leaf
     * const Leaf = await prisma.leaf.create({
     *   data: {
     *     // ... data to create a Leaf
     *   }
     * })
     * 
     */
    create<T extends LeafCreateArgs>(args: SelectSubset<T, LeafCreateArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaves.
     * @param {LeafCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leaf = await prisma.leaf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeafCreateManyArgs>(args?: SelectSubset<T, LeafCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaves and returns the data saved in the database.
     * @param {LeafCreateManyAndReturnArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leaf = await prisma.leaf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaves and only return the `id`
     * const leafWithIdOnly = await prisma.leaf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeafCreateManyAndReturnArgs>(args?: SelectSubset<T, LeafCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leaf.
     * @param {LeafDeleteArgs} args - Arguments to delete one Leaf.
     * @example
     * // Delete one Leaf
     * const Leaf = await prisma.leaf.delete({
     *   where: {
     *     // ... filter to delete one Leaf
     *   }
     * })
     * 
     */
    delete<T extends LeafDeleteArgs>(args: SelectSubset<T, LeafDeleteArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leaf.
     * @param {LeafUpdateArgs} args - Arguments to update one Leaf.
     * @example
     * // Update one Leaf
     * const leaf = await prisma.leaf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeafUpdateArgs>(args: SelectSubset<T, LeafUpdateArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaves.
     * @param {LeafDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leaf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeafDeleteManyArgs>(args?: SelectSubset<T, LeafDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leaf = await prisma.leaf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeafUpdateManyArgs>(args: SelectSubset<T, LeafUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves and returns the data updated in the database.
     * @param {LeafUpdateManyAndReturnArgs} args - Arguments to update many Leaves.
     * @example
     * // Update many Leaves
     * const leaf = await prisma.leaf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaves and only return the `id`
     * const leafWithIdOnly = await prisma.leaf.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeafUpdateManyAndReturnArgs>(args: SelectSubset<T, LeafUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leaf.
     * @param {LeafUpsertArgs} args - Arguments to update or create a Leaf.
     * @example
     * // Update or create a Leaf
     * const leaf = await prisma.leaf.upsert({
     *   create: {
     *     // ... data to create a Leaf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaf we want to update
     *   }
     * })
     */
    upsert<T extends LeafUpsertArgs>(args: SelectSubset<T, LeafUpsertArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leaf.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeafCountArgs>(
      args?: Subset<T, LeafCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeafCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeafAggregateArgs>(args: Subset<T, LeafAggregateArgs>): Prisma.PrismaPromise<GetLeafAggregateType<T>>

    /**
     * Group by Leaf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafGroupByArgs} args - Group by arguments.
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
      T extends LeafGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeafGroupByArgs['orderBy'] }
        : { orderBy?: LeafGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeafGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeafGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leaf model
   */
  readonly fields: LeafFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leaf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeafClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    linkedTo<T extends Leaf$linkedToArgs<ExtArgs> = {}>(args?: Subset<T, Leaf$linkedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedFrom<T extends Leaf$linkedFromArgs<ExtArgs> = {}>(args?: Subset<T, Leaf$linkedFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Leaf model
   */
  interface LeafFieldRefs {
    readonly id: FieldRef<"Leaf", 'String'>
    readonly title: FieldRef<"Leaf", 'String'>
    readonly content: FieldRef<"Leaf", 'String'>
    readonly tags: FieldRef<"Leaf", 'String[]'>
    readonly createdAt: FieldRef<"Leaf", 'DateTime'>
    readonly updatedAt: FieldRef<"Leaf", 'DateTime'>
    readonly userId: FieldRef<"Leaf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Leaf findUnique
   */
  export type LeafFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * Filter, which Leaf to fetch.
     */
    where: LeafWhereUniqueInput
  }

  /**
   * Leaf findUniqueOrThrow
   */
  export type LeafFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * Filter, which Leaf to fetch.
     */
    where: LeafWhereUniqueInput
  }

  /**
   * Leaf findFirst
   */
  export type LeafFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * Filter, which Leaf to fetch.
     */
    where?: LeafWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeafOrderByWithRelationInput | LeafOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeafWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeafScalarFieldEnum | LeafScalarFieldEnum[]
  }

  /**
   * Leaf findFirstOrThrow
   */
  export type LeafFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * Filter, which Leaf to fetch.
     */
    where?: LeafWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeafOrderByWithRelationInput | LeafOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeafWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeafScalarFieldEnum | LeafScalarFieldEnum[]
  }

  /**
   * Leaf findMany
   */
  export type LeafFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeafWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeafOrderByWithRelationInput | LeafOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeafWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeafScalarFieldEnum | LeafScalarFieldEnum[]
  }

  /**
   * Leaf create
   */
  export type LeafCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * The data needed to create a Leaf.
     */
    data: XOR<LeafCreateInput, LeafUncheckedCreateInput>
  }

  /**
   * Leaf createMany
   */
  export type LeafCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeafCreateManyInput | LeafCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaf createManyAndReturn
   */
  export type LeafCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * The data used to create many Leaves.
     */
    data: LeafCreateManyInput | LeafCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaf update
   */
  export type LeafUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * The data needed to update a Leaf.
     */
    data: XOR<LeafUpdateInput, LeafUncheckedUpdateInput>
    /**
     * Choose, which Leaf to update.
     */
    where: LeafWhereUniqueInput
  }

  /**
   * Leaf updateMany
   */
  export type LeafUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeafUpdateManyMutationInput, LeafUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeafWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
  }

  /**
   * Leaf updateManyAndReturn
   */
  export type LeafUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeafUpdateManyMutationInput, LeafUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeafWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaf upsert
   */
  export type LeafUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * The filter to search for the Leaf to update in case it exists.
     */
    where: LeafWhereUniqueInput
    /**
     * In case the Leaf found by the `where` argument doesn't exist, create a new Leaf with this data.
     */
    create: XOR<LeafCreateInput, LeafUncheckedCreateInput>
    /**
     * In case the Leaf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeafUpdateInput, LeafUncheckedUpdateInput>
  }

  /**
   * Leaf delete
   */
  export type LeafDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
    /**
     * Filter which Leaf to delete.
     */
    where: LeafWhereUniqueInput
  }

  /**
   * Leaf deleteMany
   */
  export type LeafDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeafWhereInput
    /**
     * Limit how many Leaves to delete.
     */
    limit?: number
  }

  /**
   * Leaf.linkedTo
   */
  export type Leaf$linkedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    where?: LeafLinkWhereInput
    orderBy?: LeafLinkOrderByWithRelationInput | LeafLinkOrderByWithRelationInput[]
    cursor?: LeafLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeafLinkScalarFieldEnum | LeafLinkScalarFieldEnum[]
  }

  /**
   * Leaf.linkedFrom
   */
  export type Leaf$linkedFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    where?: LeafLinkWhereInput
    orderBy?: LeafLinkOrderByWithRelationInput | LeafLinkOrderByWithRelationInput[]
    cursor?: LeafLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeafLinkScalarFieldEnum | LeafLinkScalarFieldEnum[]
  }

  /**
   * Leaf without action
   */
  export type LeafDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaf
     */
    select?: LeafSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaf
     */
    omit?: LeafOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafInclude<ExtArgs> | null
  }


  /**
   * Model LeafLink
   */

  export type AggregateLeafLink = {
    _count: LeafLinkCountAggregateOutputType | null
    _min: LeafLinkMinAggregateOutputType | null
    _max: LeafLinkMaxAggregateOutputType | null
  }

  export type LeafLinkMinAggregateOutputType = {
    id: string | null
    sourceLeafId: string | null
    targetLeafId: string | null
    createdAt: Date | null
  }

  export type LeafLinkMaxAggregateOutputType = {
    id: string | null
    sourceLeafId: string | null
    targetLeafId: string | null
    createdAt: Date | null
  }

  export type LeafLinkCountAggregateOutputType = {
    id: number
    sourceLeafId: number
    targetLeafId: number
    createdAt: number
    _all: number
  }


  export type LeafLinkMinAggregateInputType = {
    id?: true
    sourceLeafId?: true
    targetLeafId?: true
    createdAt?: true
  }

  export type LeafLinkMaxAggregateInputType = {
    id?: true
    sourceLeafId?: true
    targetLeafId?: true
    createdAt?: true
  }

  export type LeafLinkCountAggregateInputType = {
    id?: true
    sourceLeafId?: true
    targetLeafId?: true
    createdAt?: true
    _all?: true
  }

  export type LeafLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeafLink to aggregate.
     */
    where?: LeafLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafLinks to fetch.
     */
    orderBy?: LeafLinkOrderByWithRelationInput | LeafLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeafLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeafLinks
    **/
    _count?: true | LeafLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeafLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeafLinkMaxAggregateInputType
  }

  export type GetLeafLinkAggregateType<T extends LeafLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLeafLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeafLink[P]>
      : GetScalarType<T[P], AggregateLeafLink[P]>
  }




  export type LeafLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeafLinkWhereInput
    orderBy?: LeafLinkOrderByWithAggregationInput | LeafLinkOrderByWithAggregationInput[]
    by: LeafLinkScalarFieldEnum[] | LeafLinkScalarFieldEnum
    having?: LeafLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeafLinkCountAggregateInputType | true
    _min?: LeafLinkMinAggregateInputType
    _max?: LeafLinkMaxAggregateInputType
  }

  export type LeafLinkGroupByOutputType = {
    id: string
    sourceLeafId: string
    targetLeafId: string
    createdAt: Date
    _count: LeafLinkCountAggregateOutputType | null
    _min: LeafLinkMinAggregateOutputType | null
    _max: LeafLinkMaxAggregateOutputType | null
  }

  type GetLeafLinkGroupByPayload<T extends LeafLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeafLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeafLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeafLinkGroupByOutputType[P]>
            : GetScalarType<T[P], LeafLinkGroupByOutputType[P]>
        }
      >
    >


  export type LeafLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLeafId?: boolean
    targetLeafId?: boolean
    createdAt?: boolean
    sourceLeaf?: boolean | LeafDefaultArgs<ExtArgs>
    targetLeaf?: boolean | LeafDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leafLink"]>

  export type LeafLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLeafId?: boolean
    targetLeafId?: boolean
    createdAt?: boolean
    sourceLeaf?: boolean | LeafDefaultArgs<ExtArgs>
    targetLeaf?: boolean | LeafDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leafLink"]>

  export type LeafLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLeafId?: boolean
    targetLeafId?: boolean
    createdAt?: boolean
    sourceLeaf?: boolean | LeafDefaultArgs<ExtArgs>
    targetLeaf?: boolean | LeafDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leafLink"]>

  export type LeafLinkSelectScalar = {
    id?: boolean
    sourceLeafId?: boolean
    targetLeafId?: boolean
    createdAt?: boolean
  }

  export type LeafLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceLeafId" | "targetLeafId" | "createdAt", ExtArgs["result"]["leafLink"]>
  export type LeafLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceLeaf?: boolean | LeafDefaultArgs<ExtArgs>
    targetLeaf?: boolean | LeafDefaultArgs<ExtArgs>
  }
  export type LeafLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceLeaf?: boolean | LeafDefaultArgs<ExtArgs>
    targetLeaf?: boolean | LeafDefaultArgs<ExtArgs>
  }
  export type LeafLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceLeaf?: boolean | LeafDefaultArgs<ExtArgs>
    targetLeaf?: boolean | LeafDefaultArgs<ExtArgs>
  }

  export type $LeafLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeafLink"
    objects: {
      sourceLeaf: Prisma.$LeafPayload<ExtArgs>
      targetLeaf: Prisma.$LeafPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceLeafId: string
      targetLeafId: string
      createdAt: Date
    }, ExtArgs["result"]["leafLink"]>
    composites: {}
  }

  type LeafLinkGetPayload<S extends boolean | null | undefined | LeafLinkDefaultArgs> = $Result.GetResult<Prisma.$LeafLinkPayload, S>

  type LeafLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeafLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeafLinkCountAggregateInputType | true
    }

  export interface LeafLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeafLink'], meta: { name: 'LeafLink' } }
    /**
     * Find zero or one LeafLink that matches the filter.
     * @param {LeafLinkFindUniqueArgs} args - Arguments to find a LeafLink
     * @example
     * // Get one LeafLink
     * const leafLink = await prisma.leafLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeafLinkFindUniqueArgs>(args: SelectSubset<T, LeafLinkFindUniqueArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeafLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeafLinkFindUniqueOrThrowArgs} args - Arguments to find a LeafLink
     * @example
     * // Get one LeafLink
     * const leafLink = await prisma.leafLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeafLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LeafLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeafLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafLinkFindFirstArgs} args - Arguments to find a LeafLink
     * @example
     * // Get one LeafLink
     * const leafLink = await prisma.leafLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeafLinkFindFirstArgs>(args?: SelectSubset<T, LeafLinkFindFirstArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeafLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafLinkFindFirstOrThrowArgs} args - Arguments to find a LeafLink
     * @example
     * // Get one LeafLink
     * const leafLink = await prisma.leafLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeafLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LeafLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeafLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeafLinks
     * const leafLinks = await prisma.leafLink.findMany()
     * 
     * // Get first 10 LeafLinks
     * const leafLinks = await prisma.leafLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leafLinkWithIdOnly = await prisma.leafLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeafLinkFindManyArgs>(args?: SelectSubset<T, LeafLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeafLink.
     * @param {LeafLinkCreateArgs} args - Arguments to create a LeafLink.
     * @example
     * // Create one LeafLink
     * const LeafLink = await prisma.leafLink.create({
     *   data: {
     *     // ... data to create a LeafLink
     *   }
     * })
     * 
     */
    create<T extends LeafLinkCreateArgs>(args: SelectSubset<T, LeafLinkCreateArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeafLinks.
     * @param {LeafLinkCreateManyArgs} args - Arguments to create many LeafLinks.
     * @example
     * // Create many LeafLinks
     * const leafLink = await prisma.leafLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeafLinkCreateManyArgs>(args?: SelectSubset<T, LeafLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeafLinks and returns the data saved in the database.
     * @param {LeafLinkCreateManyAndReturnArgs} args - Arguments to create many LeafLinks.
     * @example
     * // Create many LeafLinks
     * const leafLink = await prisma.leafLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeafLinks and only return the `id`
     * const leafLinkWithIdOnly = await prisma.leafLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeafLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LeafLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeafLink.
     * @param {LeafLinkDeleteArgs} args - Arguments to delete one LeafLink.
     * @example
     * // Delete one LeafLink
     * const LeafLink = await prisma.leafLink.delete({
     *   where: {
     *     // ... filter to delete one LeafLink
     *   }
     * })
     * 
     */
    delete<T extends LeafLinkDeleteArgs>(args: SelectSubset<T, LeafLinkDeleteArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeafLink.
     * @param {LeafLinkUpdateArgs} args - Arguments to update one LeafLink.
     * @example
     * // Update one LeafLink
     * const leafLink = await prisma.leafLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeafLinkUpdateArgs>(args: SelectSubset<T, LeafLinkUpdateArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeafLinks.
     * @param {LeafLinkDeleteManyArgs} args - Arguments to filter LeafLinks to delete.
     * @example
     * // Delete a few LeafLinks
     * const { count } = await prisma.leafLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeafLinkDeleteManyArgs>(args?: SelectSubset<T, LeafLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeafLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeafLinks
     * const leafLink = await prisma.leafLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeafLinkUpdateManyArgs>(args: SelectSubset<T, LeafLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeafLinks and returns the data updated in the database.
     * @param {LeafLinkUpdateManyAndReturnArgs} args - Arguments to update many LeafLinks.
     * @example
     * // Update many LeafLinks
     * const leafLink = await prisma.leafLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeafLinks and only return the `id`
     * const leafLinkWithIdOnly = await prisma.leafLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeafLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LeafLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeafLink.
     * @param {LeafLinkUpsertArgs} args - Arguments to update or create a LeafLink.
     * @example
     * // Update or create a LeafLink
     * const leafLink = await prisma.leafLink.upsert({
     *   create: {
     *     // ... data to create a LeafLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeafLink we want to update
     *   }
     * })
     */
    upsert<T extends LeafLinkUpsertArgs>(args: SelectSubset<T, LeafLinkUpsertArgs<ExtArgs>>): Prisma__LeafLinkClient<$Result.GetResult<Prisma.$LeafLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeafLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafLinkCountArgs} args - Arguments to filter LeafLinks to count.
     * @example
     * // Count the number of LeafLinks
     * const count = await prisma.leafLink.count({
     *   where: {
     *     // ... the filter for the LeafLinks we want to count
     *   }
     * })
    **/
    count<T extends LeafLinkCountArgs>(
      args?: Subset<T, LeafLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeafLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeafLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeafLinkAggregateArgs>(args: Subset<T, LeafLinkAggregateArgs>): Prisma.PrismaPromise<GetLeafLinkAggregateType<T>>

    /**
     * Group by LeafLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeafLinkGroupByArgs} args - Group by arguments.
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
      T extends LeafLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeafLinkGroupByArgs['orderBy'] }
        : { orderBy?: LeafLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeafLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeafLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeafLink model
   */
  readonly fields: LeafLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeafLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeafLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceLeaf<T extends LeafDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeafDefaultArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetLeaf<T extends LeafDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeafDefaultArgs<ExtArgs>>): Prisma__LeafClient<$Result.GetResult<Prisma.$LeafPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeafLink model
   */
  interface LeafLinkFieldRefs {
    readonly id: FieldRef<"LeafLink", 'String'>
    readonly sourceLeafId: FieldRef<"LeafLink", 'String'>
    readonly targetLeafId: FieldRef<"LeafLink", 'String'>
    readonly createdAt: FieldRef<"LeafLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeafLink findUnique
   */
  export type LeafLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * Filter, which LeafLink to fetch.
     */
    where: LeafLinkWhereUniqueInput
  }

  /**
   * LeafLink findUniqueOrThrow
   */
  export type LeafLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * Filter, which LeafLink to fetch.
     */
    where: LeafLinkWhereUniqueInput
  }

  /**
   * LeafLink findFirst
   */
  export type LeafLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * Filter, which LeafLink to fetch.
     */
    where?: LeafLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafLinks to fetch.
     */
    orderBy?: LeafLinkOrderByWithRelationInput | LeafLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeafLinks.
     */
    cursor?: LeafLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeafLinks.
     */
    distinct?: LeafLinkScalarFieldEnum | LeafLinkScalarFieldEnum[]
  }

  /**
   * LeafLink findFirstOrThrow
   */
  export type LeafLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * Filter, which LeafLink to fetch.
     */
    where?: LeafLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafLinks to fetch.
     */
    orderBy?: LeafLinkOrderByWithRelationInput | LeafLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeafLinks.
     */
    cursor?: LeafLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeafLinks.
     */
    distinct?: LeafLinkScalarFieldEnum | LeafLinkScalarFieldEnum[]
  }

  /**
   * LeafLink findMany
   */
  export type LeafLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * Filter, which LeafLinks to fetch.
     */
    where?: LeafLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeafLinks to fetch.
     */
    orderBy?: LeafLinkOrderByWithRelationInput | LeafLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeafLinks.
     */
    cursor?: LeafLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeafLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeafLinks.
     */
    skip?: number
    distinct?: LeafLinkScalarFieldEnum | LeafLinkScalarFieldEnum[]
  }

  /**
   * LeafLink create
   */
  export type LeafLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a LeafLink.
     */
    data: XOR<LeafLinkCreateInput, LeafLinkUncheckedCreateInput>
  }

  /**
   * LeafLink createMany
   */
  export type LeafLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeafLinks.
     */
    data: LeafLinkCreateManyInput | LeafLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeafLink createManyAndReturn
   */
  export type LeafLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * The data used to create many LeafLinks.
     */
    data: LeafLinkCreateManyInput | LeafLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeafLink update
   */
  export type LeafLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a LeafLink.
     */
    data: XOR<LeafLinkUpdateInput, LeafLinkUncheckedUpdateInput>
    /**
     * Choose, which LeafLink to update.
     */
    where: LeafLinkWhereUniqueInput
  }

  /**
   * LeafLink updateMany
   */
  export type LeafLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeafLinks.
     */
    data: XOR<LeafLinkUpdateManyMutationInput, LeafLinkUncheckedUpdateManyInput>
    /**
     * Filter which LeafLinks to update
     */
    where?: LeafLinkWhereInput
    /**
     * Limit how many LeafLinks to update.
     */
    limit?: number
  }

  /**
   * LeafLink updateManyAndReturn
   */
  export type LeafLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * The data used to update LeafLinks.
     */
    data: XOR<LeafLinkUpdateManyMutationInput, LeafLinkUncheckedUpdateManyInput>
    /**
     * Filter which LeafLinks to update
     */
    where?: LeafLinkWhereInput
    /**
     * Limit how many LeafLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeafLink upsert
   */
  export type LeafLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the LeafLink to update in case it exists.
     */
    where: LeafLinkWhereUniqueInput
    /**
     * In case the LeafLink found by the `where` argument doesn't exist, create a new LeafLink with this data.
     */
    create: XOR<LeafLinkCreateInput, LeafLinkUncheckedCreateInput>
    /**
     * In case the LeafLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeafLinkUpdateInput, LeafLinkUncheckedUpdateInput>
  }

  /**
   * LeafLink delete
   */
  export type LeafLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
    /**
     * Filter which LeafLink to delete.
     */
    where: LeafLinkWhereUniqueInput
  }

  /**
   * LeafLink deleteMany
   */
  export type LeafLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeafLinks to delete
     */
    where?: LeafLinkWhereInput
    /**
     * Limit how many LeafLinks to delete.
     */
    limit?: number
  }

  /**
   * LeafLink without action
   */
  export type LeafLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeafLink
     */
    select?: LeafLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeafLink
     */
    omit?: LeafLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeafLinkInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LeafScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type LeafScalarFieldEnum = (typeof LeafScalarFieldEnum)[keyof typeof LeafScalarFieldEnum]


  export const LeafLinkScalarFieldEnum: {
    id: 'id',
    sourceLeafId: 'sourceLeafId',
    targetLeafId: 'targetLeafId',
    createdAt: 'createdAt'
  };

  export type LeafLinkScalarFieldEnum = (typeof LeafLinkScalarFieldEnum)[keyof typeof LeafLinkScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leaves?: LeafListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leaves?: LeafOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leaves?: LeafListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LeafWhereInput = {
    AND?: LeafWhereInput | LeafWhereInput[]
    OR?: LeafWhereInput[]
    NOT?: LeafWhereInput | LeafWhereInput[]
    id?: StringFilter<"Leaf"> | string
    title?: StringFilter<"Leaf"> | string
    content?: StringFilter<"Leaf"> | string
    tags?: StringNullableListFilter<"Leaf">
    createdAt?: DateTimeFilter<"Leaf"> | Date | string
    updatedAt?: DateTimeFilter<"Leaf"> | Date | string
    userId?: StringFilter<"Leaf"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    linkedTo?: LeafLinkListRelationFilter
    linkedFrom?: LeafLinkListRelationFilter
  }

  export type LeafOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    linkedTo?: LeafLinkOrderByRelationAggregateInput
    linkedFrom?: LeafLinkOrderByRelationAggregateInput
  }

  export type LeafWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeafWhereInput | LeafWhereInput[]
    OR?: LeafWhereInput[]
    NOT?: LeafWhereInput | LeafWhereInput[]
    title?: StringFilter<"Leaf"> | string
    content?: StringFilter<"Leaf"> | string
    tags?: StringNullableListFilter<"Leaf">
    createdAt?: DateTimeFilter<"Leaf"> | Date | string
    updatedAt?: DateTimeFilter<"Leaf"> | Date | string
    userId?: StringFilter<"Leaf"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    linkedTo?: LeafLinkListRelationFilter
    linkedFrom?: LeafLinkListRelationFilter
  }, "id">

  export type LeafOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: LeafCountOrderByAggregateInput
    _max?: LeafMaxOrderByAggregateInput
    _min?: LeafMinOrderByAggregateInput
  }

  export type LeafScalarWhereWithAggregatesInput = {
    AND?: LeafScalarWhereWithAggregatesInput | LeafScalarWhereWithAggregatesInput[]
    OR?: LeafScalarWhereWithAggregatesInput[]
    NOT?: LeafScalarWhereWithAggregatesInput | LeafScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leaf"> | string
    title?: StringWithAggregatesFilter<"Leaf"> | string
    content?: StringWithAggregatesFilter<"Leaf"> | string
    tags?: StringNullableListFilter<"Leaf">
    createdAt?: DateTimeWithAggregatesFilter<"Leaf"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leaf"> | Date | string
    userId?: StringWithAggregatesFilter<"Leaf"> | string
  }

  export type LeafLinkWhereInput = {
    AND?: LeafLinkWhereInput | LeafLinkWhereInput[]
    OR?: LeafLinkWhereInput[]
    NOT?: LeafLinkWhereInput | LeafLinkWhereInput[]
    id?: StringFilter<"LeafLink"> | string
    sourceLeafId?: StringFilter<"LeafLink"> | string
    targetLeafId?: StringFilter<"LeafLink"> | string
    createdAt?: DateTimeFilter<"LeafLink"> | Date | string
    sourceLeaf?: XOR<LeafScalarRelationFilter, LeafWhereInput>
    targetLeaf?: XOR<LeafScalarRelationFilter, LeafWhereInput>
  }

  export type LeafLinkOrderByWithRelationInput = {
    id?: SortOrder
    sourceLeafId?: SortOrder
    targetLeafId?: SortOrder
    createdAt?: SortOrder
    sourceLeaf?: LeafOrderByWithRelationInput
    targetLeaf?: LeafOrderByWithRelationInput
  }

  export type LeafLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceLeafId_targetLeafId?: LeafLinkSourceLeafIdTargetLeafIdCompoundUniqueInput
    AND?: LeafLinkWhereInput | LeafLinkWhereInput[]
    OR?: LeafLinkWhereInput[]
    NOT?: LeafLinkWhereInput | LeafLinkWhereInput[]
    sourceLeafId?: StringFilter<"LeafLink"> | string
    targetLeafId?: StringFilter<"LeafLink"> | string
    createdAt?: DateTimeFilter<"LeafLink"> | Date | string
    sourceLeaf?: XOR<LeafScalarRelationFilter, LeafWhereInput>
    targetLeaf?: XOR<LeafScalarRelationFilter, LeafWhereInput>
  }, "id" | "sourceLeafId_targetLeafId">

  export type LeafLinkOrderByWithAggregationInput = {
    id?: SortOrder
    sourceLeafId?: SortOrder
    targetLeafId?: SortOrder
    createdAt?: SortOrder
    _count?: LeafLinkCountOrderByAggregateInput
    _max?: LeafLinkMaxOrderByAggregateInput
    _min?: LeafLinkMinOrderByAggregateInput
  }

  export type LeafLinkScalarWhereWithAggregatesInput = {
    AND?: LeafLinkScalarWhereWithAggregatesInput | LeafLinkScalarWhereWithAggregatesInput[]
    OR?: LeafLinkScalarWhereWithAggregatesInput[]
    NOT?: LeafLinkScalarWhereWithAggregatesInput | LeafLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeafLink"> | string
    sourceLeafId?: StringWithAggregatesFilter<"LeafLink"> | string
    targetLeafId?: StringWithAggregatesFilter<"LeafLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeafLink"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaves?: LeafCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leaves?: LeafUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeafUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeafUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafCreateInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeavesInput
    linkedTo?: LeafLinkCreateNestedManyWithoutSourceLeafInput
    linkedFrom?: LeafLinkCreateNestedManyWithoutTargetLeafInput
  }

  export type LeafUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    linkedTo?: LeafLinkUncheckedCreateNestedManyWithoutSourceLeafInput
    linkedFrom?: LeafLinkUncheckedCreateNestedManyWithoutTargetLeafInput
  }

  export type LeafUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    linkedTo?: LeafLinkUpdateManyWithoutSourceLeafNestedInput
    linkedFrom?: LeafLinkUpdateManyWithoutTargetLeafNestedInput
  }

  export type LeafUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedTo?: LeafLinkUncheckedUpdateManyWithoutSourceLeafNestedInput
    linkedFrom?: LeafLinkUncheckedUpdateManyWithoutTargetLeafNestedInput
  }

  export type LeafCreateManyInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type LeafUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LeafLinkCreateInput = {
    id?: string
    createdAt?: Date | string
    sourceLeaf: LeafCreateNestedOneWithoutLinkedToInput
    targetLeaf: LeafCreateNestedOneWithoutLinkedFromInput
  }

  export type LeafLinkUncheckedCreateInput = {
    id?: string
    sourceLeafId: string
    targetLeafId: string
    createdAt?: Date | string
  }

  export type LeafLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceLeaf?: LeafUpdateOneRequiredWithoutLinkedToNestedInput
    targetLeaf?: LeafUpdateOneRequiredWithoutLinkedFromNestedInput
  }

  export type LeafLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLeafId?: StringFieldUpdateOperationsInput | string
    targetLeafId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafLinkCreateManyInput = {
    id?: string
    sourceLeafId: string
    targetLeafId: string
    createdAt?: Date | string
  }

  export type LeafLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLeafId?: StringFieldUpdateOperationsInput | string
    targetLeafId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type LeafListRelationFilter = {
    every?: LeafWhereInput
    some?: LeafWhereInput
    none?: LeafWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeafOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeafLinkListRelationFilter = {
    every?: LeafLinkWhereInput
    some?: LeafLinkWhereInput
    none?: LeafLinkWhereInput
  }

  export type LeafLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeafCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LeafMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LeafMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LeafScalarRelationFilter = {
    is?: LeafWhereInput
    isNot?: LeafWhereInput
  }

  export type LeafLinkSourceLeafIdTargetLeafIdCompoundUniqueInput = {
    sourceLeafId: string
    targetLeafId: string
  }

  export type LeafLinkCountOrderByAggregateInput = {
    id?: SortOrder
    sourceLeafId?: SortOrder
    targetLeafId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeafLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceLeafId?: SortOrder
    targetLeafId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeafLinkMinOrderByAggregateInput = {
    id?: SortOrder
    sourceLeafId?: SortOrder
    targetLeafId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeafCreateNestedManyWithoutUserInput = {
    create?: XOR<LeafCreateWithoutUserInput, LeafUncheckedCreateWithoutUserInput> | LeafCreateWithoutUserInput[] | LeafUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeafCreateOrConnectWithoutUserInput | LeafCreateOrConnectWithoutUserInput[]
    createMany?: LeafCreateManyUserInputEnvelope
    connect?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
  }

  export type LeafUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeafCreateWithoutUserInput, LeafUncheckedCreateWithoutUserInput> | LeafCreateWithoutUserInput[] | LeafUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeafCreateOrConnectWithoutUserInput | LeafCreateOrConnectWithoutUserInput[]
    createMany?: LeafCreateManyUserInputEnvelope
    connect?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeafUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeafCreateWithoutUserInput, LeafUncheckedCreateWithoutUserInput> | LeafCreateWithoutUserInput[] | LeafUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeafCreateOrConnectWithoutUserInput | LeafCreateOrConnectWithoutUserInput[]
    upsert?: LeafUpsertWithWhereUniqueWithoutUserInput | LeafUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeafCreateManyUserInputEnvelope
    set?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    disconnect?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    delete?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    connect?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    update?: LeafUpdateWithWhereUniqueWithoutUserInput | LeafUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeafUpdateManyWithWhereWithoutUserInput | LeafUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeafScalarWhereInput | LeafScalarWhereInput[]
  }

  export type LeafUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeafCreateWithoutUserInput, LeafUncheckedCreateWithoutUserInput> | LeafCreateWithoutUserInput[] | LeafUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeafCreateOrConnectWithoutUserInput | LeafCreateOrConnectWithoutUserInput[]
    upsert?: LeafUpsertWithWhereUniqueWithoutUserInput | LeafUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeafCreateManyUserInputEnvelope
    set?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    disconnect?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    delete?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    connect?: LeafWhereUniqueInput | LeafWhereUniqueInput[]
    update?: LeafUpdateWithWhereUniqueWithoutUserInput | LeafUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeafUpdateManyWithWhereWithoutUserInput | LeafUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeafScalarWhereInput | LeafScalarWhereInput[]
  }

  export type LeafCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutLeavesInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type LeafLinkCreateNestedManyWithoutSourceLeafInput = {
    create?: XOR<LeafLinkCreateWithoutSourceLeafInput, LeafLinkUncheckedCreateWithoutSourceLeafInput> | LeafLinkCreateWithoutSourceLeafInput[] | LeafLinkUncheckedCreateWithoutSourceLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutSourceLeafInput | LeafLinkCreateOrConnectWithoutSourceLeafInput[]
    createMany?: LeafLinkCreateManySourceLeafInputEnvelope
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
  }

  export type LeafLinkCreateNestedManyWithoutTargetLeafInput = {
    create?: XOR<LeafLinkCreateWithoutTargetLeafInput, LeafLinkUncheckedCreateWithoutTargetLeafInput> | LeafLinkCreateWithoutTargetLeafInput[] | LeafLinkUncheckedCreateWithoutTargetLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutTargetLeafInput | LeafLinkCreateOrConnectWithoutTargetLeafInput[]
    createMany?: LeafLinkCreateManyTargetLeafInputEnvelope
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
  }

  export type LeafLinkUncheckedCreateNestedManyWithoutSourceLeafInput = {
    create?: XOR<LeafLinkCreateWithoutSourceLeafInput, LeafLinkUncheckedCreateWithoutSourceLeafInput> | LeafLinkCreateWithoutSourceLeafInput[] | LeafLinkUncheckedCreateWithoutSourceLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutSourceLeafInput | LeafLinkCreateOrConnectWithoutSourceLeafInput[]
    createMany?: LeafLinkCreateManySourceLeafInputEnvelope
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
  }

  export type LeafLinkUncheckedCreateNestedManyWithoutTargetLeafInput = {
    create?: XOR<LeafLinkCreateWithoutTargetLeafInput, LeafLinkUncheckedCreateWithoutTargetLeafInput> | LeafLinkCreateWithoutTargetLeafInput[] | LeafLinkUncheckedCreateWithoutTargetLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutTargetLeafInput | LeafLinkCreateOrConnectWithoutTargetLeafInput[]
    createMany?: LeafLinkCreateManyTargetLeafInputEnvelope
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
  }

  export type LeafUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    upsert?: UserUpsertWithoutLeavesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeavesInput, UserUpdateWithoutLeavesInput>, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type LeafLinkUpdateManyWithoutSourceLeafNestedInput = {
    create?: XOR<LeafLinkCreateWithoutSourceLeafInput, LeafLinkUncheckedCreateWithoutSourceLeafInput> | LeafLinkCreateWithoutSourceLeafInput[] | LeafLinkUncheckedCreateWithoutSourceLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutSourceLeafInput | LeafLinkCreateOrConnectWithoutSourceLeafInput[]
    upsert?: LeafLinkUpsertWithWhereUniqueWithoutSourceLeafInput | LeafLinkUpsertWithWhereUniqueWithoutSourceLeafInput[]
    createMany?: LeafLinkCreateManySourceLeafInputEnvelope
    set?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    disconnect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    delete?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    update?: LeafLinkUpdateWithWhereUniqueWithoutSourceLeafInput | LeafLinkUpdateWithWhereUniqueWithoutSourceLeafInput[]
    updateMany?: LeafLinkUpdateManyWithWhereWithoutSourceLeafInput | LeafLinkUpdateManyWithWhereWithoutSourceLeafInput[]
    deleteMany?: LeafLinkScalarWhereInput | LeafLinkScalarWhereInput[]
  }

  export type LeafLinkUpdateManyWithoutTargetLeafNestedInput = {
    create?: XOR<LeafLinkCreateWithoutTargetLeafInput, LeafLinkUncheckedCreateWithoutTargetLeafInput> | LeafLinkCreateWithoutTargetLeafInput[] | LeafLinkUncheckedCreateWithoutTargetLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutTargetLeafInput | LeafLinkCreateOrConnectWithoutTargetLeafInput[]
    upsert?: LeafLinkUpsertWithWhereUniqueWithoutTargetLeafInput | LeafLinkUpsertWithWhereUniqueWithoutTargetLeafInput[]
    createMany?: LeafLinkCreateManyTargetLeafInputEnvelope
    set?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    disconnect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    delete?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    update?: LeafLinkUpdateWithWhereUniqueWithoutTargetLeafInput | LeafLinkUpdateWithWhereUniqueWithoutTargetLeafInput[]
    updateMany?: LeafLinkUpdateManyWithWhereWithoutTargetLeafInput | LeafLinkUpdateManyWithWhereWithoutTargetLeafInput[]
    deleteMany?: LeafLinkScalarWhereInput | LeafLinkScalarWhereInput[]
  }

  export type LeafLinkUncheckedUpdateManyWithoutSourceLeafNestedInput = {
    create?: XOR<LeafLinkCreateWithoutSourceLeafInput, LeafLinkUncheckedCreateWithoutSourceLeafInput> | LeafLinkCreateWithoutSourceLeafInput[] | LeafLinkUncheckedCreateWithoutSourceLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutSourceLeafInput | LeafLinkCreateOrConnectWithoutSourceLeafInput[]
    upsert?: LeafLinkUpsertWithWhereUniqueWithoutSourceLeafInput | LeafLinkUpsertWithWhereUniqueWithoutSourceLeafInput[]
    createMany?: LeafLinkCreateManySourceLeafInputEnvelope
    set?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    disconnect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    delete?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    update?: LeafLinkUpdateWithWhereUniqueWithoutSourceLeafInput | LeafLinkUpdateWithWhereUniqueWithoutSourceLeafInput[]
    updateMany?: LeafLinkUpdateManyWithWhereWithoutSourceLeafInput | LeafLinkUpdateManyWithWhereWithoutSourceLeafInput[]
    deleteMany?: LeafLinkScalarWhereInput | LeafLinkScalarWhereInput[]
  }

  export type LeafLinkUncheckedUpdateManyWithoutTargetLeafNestedInput = {
    create?: XOR<LeafLinkCreateWithoutTargetLeafInput, LeafLinkUncheckedCreateWithoutTargetLeafInput> | LeafLinkCreateWithoutTargetLeafInput[] | LeafLinkUncheckedCreateWithoutTargetLeafInput[]
    connectOrCreate?: LeafLinkCreateOrConnectWithoutTargetLeafInput | LeafLinkCreateOrConnectWithoutTargetLeafInput[]
    upsert?: LeafLinkUpsertWithWhereUniqueWithoutTargetLeafInput | LeafLinkUpsertWithWhereUniqueWithoutTargetLeafInput[]
    createMany?: LeafLinkCreateManyTargetLeafInputEnvelope
    set?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    disconnect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    delete?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    connect?: LeafLinkWhereUniqueInput | LeafLinkWhereUniqueInput[]
    update?: LeafLinkUpdateWithWhereUniqueWithoutTargetLeafInput | LeafLinkUpdateWithWhereUniqueWithoutTargetLeafInput[]
    updateMany?: LeafLinkUpdateManyWithWhereWithoutTargetLeafInput | LeafLinkUpdateManyWithWhereWithoutTargetLeafInput[]
    deleteMany?: LeafLinkScalarWhereInput | LeafLinkScalarWhereInput[]
  }

  export type LeafCreateNestedOneWithoutLinkedToInput = {
    create?: XOR<LeafCreateWithoutLinkedToInput, LeafUncheckedCreateWithoutLinkedToInput>
    connectOrCreate?: LeafCreateOrConnectWithoutLinkedToInput
    connect?: LeafWhereUniqueInput
  }

  export type LeafCreateNestedOneWithoutLinkedFromInput = {
    create?: XOR<LeafCreateWithoutLinkedFromInput, LeafUncheckedCreateWithoutLinkedFromInput>
    connectOrCreate?: LeafCreateOrConnectWithoutLinkedFromInput
    connect?: LeafWhereUniqueInput
  }

  export type LeafUpdateOneRequiredWithoutLinkedToNestedInput = {
    create?: XOR<LeafCreateWithoutLinkedToInput, LeafUncheckedCreateWithoutLinkedToInput>
    connectOrCreate?: LeafCreateOrConnectWithoutLinkedToInput
    upsert?: LeafUpsertWithoutLinkedToInput
    connect?: LeafWhereUniqueInput
    update?: XOR<XOR<LeafUpdateToOneWithWhereWithoutLinkedToInput, LeafUpdateWithoutLinkedToInput>, LeafUncheckedUpdateWithoutLinkedToInput>
  }

  export type LeafUpdateOneRequiredWithoutLinkedFromNestedInput = {
    create?: XOR<LeafCreateWithoutLinkedFromInput, LeafUncheckedCreateWithoutLinkedFromInput>
    connectOrCreate?: LeafCreateOrConnectWithoutLinkedFromInput
    upsert?: LeafUpsertWithoutLinkedFromInput
    connect?: LeafWhereUniqueInput
    update?: XOR<XOR<LeafUpdateToOneWithWhereWithoutLinkedFromInput, LeafUpdateWithoutLinkedFromInput>, LeafUncheckedUpdateWithoutLinkedFromInput>
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

  export type LeafCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTo?: LeafLinkCreateNestedManyWithoutSourceLeafInput
    linkedFrom?: LeafLinkCreateNestedManyWithoutTargetLeafInput
  }

  export type LeafUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedTo?: LeafLinkUncheckedCreateNestedManyWithoutSourceLeafInput
    linkedFrom?: LeafLinkUncheckedCreateNestedManyWithoutTargetLeafInput
  }

  export type LeafCreateOrConnectWithoutUserInput = {
    where: LeafWhereUniqueInput
    create: XOR<LeafCreateWithoutUserInput, LeafUncheckedCreateWithoutUserInput>
  }

  export type LeafCreateManyUserInputEnvelope = {
    data: LeafCreateManyUserInput | LeafCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeafUpsertWithWhereUniqueWithoutUserInput = {
    where: LeafWhereUniqueInput
    update: XOR<LeafUpdateWithoutUserInput, LeafUncheckedUpdateWithoutUserInput>
    create: XOR<LeafCreateWithoutUserInput, LeafUncheckedCreateWithoutUserInput>
  }

  export type LeafUpdateWithWhereUniqueWithoutUserInput = {
    where: LeafWhereUniqueInput
    data: XOR<LeafUpdateWithoutUserInput, LeafUncheckedUpdateWithoutUserInput>
  }

  export type LeafUpdateManyWithWhereWithoutUserInput = {
    where: LeafScalarWhereInput
    data: XOR<LeafUpdateManyMutationInput, LeafUncheckedUpdateManyWithoutUserInput>
  }

  export type LeafScalarWhereInput = {
    AND?: LeafScalarWhereInput | LeafScalarWhereInput[]
    OR?: LeafScalarWhereInput[]
    NOT?: LeafScalarWhereInput | LeafScalarWhereInput[]
    id?: StringFilter<"Leaf"> | string
    title?: StringFilter<"Leaf"> | string
    content?: StringFilter<"Leaf"> | string
    tags?: StringNullableListFilter<"Leaf">
    createdAt?: DateTimeFilter<"Leaf"> | Date | string
    updatedAt?: DateTimeFilter<"Leaf"> | Date | string
    userId?: StringFilter<"Leaf"> | string
  }

  export type UserCreateWithoutLeavesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLeavesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
  }

  export type LeafLinkCreateWithoutSourceLeafInput = {
    id?: string
    createdAt?: Date | string
    targetLeaf: LeafCreateNestedOneWithoutLinkedFromInput
  }

  export type LeafLinkUncheckedCreateWithoutSourceLeafInput = {
    id?: string
    targetLeafId: string
    createdAt?: Date | string
  }

  export type LeafLinkCreateOrConnectWithoutSourceLeafInput = {
    where: LeafLinkWhereUniqueInput
    create: XOR<LeafLinkCreateWithoutSourceLeafInput, LeafLinkUncheckedCreateWithoutSourceLeafInput>
  }

  export type LeafLinkCreateManySourceLeafInputEnvelope = {
    data: LeafLinkCreateManySourceLeafInput | LeafLinkCreateManySourceLeafInput[]
    skipDuplicates?: boolean
  }

  export type LeafLinkCreateWithoutTargetLeafInput = {
    id?: string
    createdAt?: Date | string
    sourceLeaf: LeafCreateNestedOneWithoutLinkedToInput
  }

  export type LeafLinkUncheckedCreateWithoutTargetLeafInput = {
    id?: string
    sourceLeafId: string
    createdAt?: Date | string
  }

  export type LeafLinkCreateOrConnectWithoutTargetLeafInput = {
    where: LeafLinkWhereUniqueInput
    create: XOR<LeafLinkCreateWithoutTargetLeafInput, LeafLinkUncheckedCreateWithoutTargetLeafInput>
  }

  export type LeafLinkCreateManyTargetLeafInputEnvelope = {
    data: LeafLinkCreateManyTargetLeafInput | LeafLinkCreateManyTargetLeafInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLeavesInput = {
    update: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type UserUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafLinkUpsertWithWhereUniqueWithoutSourceLeafInput = {
    where: LeafLinkWhereUniqueInput
    update: XOR<LeafLinkUpdateWithoutSourceLeafInput, LeafLinkUncheckedUpdateWithoutSourceLeafInput>
    create: XOR<LeafLinkCreateWithoutSourceLeafInput, LeafLinkUncheckedCreateWithoutSourceLeafInput>
  }

  export type LeafLinkUpdateWithWhereUniqueWithoutSourceLeafInput = {
    where: LeafLinkWhereUniqueInput
    data: XOR<LeafLinkUpdateWithoutSourceLeafInput, LeafLinkUncheckedUpdateWithoutSourceLeafInput>
  }

  export type LeafLinkUpdateManyWithWhereWithoutSourceLeafInput = {
    where: LeafLinkScalarWhereInput
    data: XOR<LeafLinkUpdateManyMutationInput, LeafLinkUncheckedUpdateManyWithoutSourceLeafInput>
  }

  export type LeafLinkScalarWhereInput = {
    AND?: LeafLinkScalarWhereInput | LeafLinkScalarWhereInput[]
    OR?: LeafLinkScalarWhereInput[]
    NOT?: LeafLinkScalarWhereInput | LeafLinkScalarWhereInput[]
    id?: StringFilter<"LeafLink"> | string
    sourceLeafId?: StringFilter<"LeafLink"> | string
    targetLeafId?: StringFilter<"LeafLink"> | string
    createdAt?: DateTimeFilter<"LeafLink"> | Date | string
  }

  export type LeafLinkUpsertWithWhereUniqueWithoutTargetLeafInput = {
    where: LeafLinkWhereUniqueInput
    update: XOR<LeafLinkUpdateWithoutTargetLeafInput, LeafLinkUncheckedUpdateWithoutTargetLeafInput>
    create: XOR<LeafLinkCreateWithoutTargetLeafInput, LeafLinkUncheckedCreateWithoutTargetLeafInput>
  }

  export type LeafLinkUpdateWithWhereUniqueWithoutTargetLeafInput = {
    where: LeafLinkWhereUniqueInput
    data: XOR<LeafLinkUpdateWithoutTargetLeafInput, LeafLinkUncheckedUpdateWithoutTargetLeafInput>
  }

  export type LeafLinkUpdateManyWithWhereWithoutTargetLeafInput = {
    where: LeafLinkScalarWhereInput
    data: XOR<LeafLinkUpdateManyMutationInput, LeafLinkUncheckedUpdateManyWithoutTargetLeafInput>
  }

  export type LeafCreateWithoutLinkedToInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeavesInput
    linkedFrom?: LeafLinkCreateNestedManyWithoutTargetLeafInput
  }

  export type LeafUncheckedCreateWithoutLinkedToInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    linkedFrom?: LeafLinkUncheckedCreateNestedManyWithoutTargetLeafInput
  }

  export type LeafCreateOrConnectWithoutLinkedToInput = {
    where: LeafWhereUniqueInput
    create: XOR<LeafCreateWithoutLinkedToInput, LeafUncheckedCreateWithoutLinkedToInput>
  }

  export type LeafCreateWithoutLinkedFromInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeavesInput
    linkedTo?: LeafLinkCreateNestedManyWithoutSourceLeafInput
  }

  export type LeafUncheckedCreateWithoutLinkedFromInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    linkedTo?: LeafLinkUncheckedCreateNestedManyWithoutSourceLeafInput
  }

  export type LeafCreateOrConnectWithoutLinkedFromInput = {
    where: LeafWhereUniqueInput
    create: XOR<LeafCreateWithoutLinkedFromInput, LeafUncheckedCreateWithoutLinkedFromInput>
  }

  export type LeafUpsertWithoutLinkedToInput = {
    update: XOR<LeafUpdateWithoutLinkedToInput, LeafUncheckedUpdateWithoutLinkedToInput>
    create: XOR<LeafCreateWithoutLinkedToInput, LeafUncheckedCreateWithoutLinkedToInput>
    where?: LeafWhereInput
  }

  export type LeafUpdateToOneWithWhereWithoutLinkedToInput = {
    where?: LeafWhereInput
    data: XOR<LeafUpdateWithoutLinkedToInput, LeafUncheckedUpdateWithoutLinkedToInput>
  }

  export type LeafUpdateWithoutLinkedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    linkedFrom?: LeafLinkUpdateManyWithoutTargetLeafNestedInput
  }

  export type LeafUncheckedUpdateWithoutLinkedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedFrom?: LeafLinkUncheckedUpdateManyWithoutTargetLeafNestedInput
  }

  export type LeafUpsertWithoutLinkedFromInput = {
    update: XOR<LeafUpdateWithoutLinkedFromInput, LeafUncheckedUpdateWithoutLinkedFromInput>
    create: XOR<LeafCreateWithoutLinkedFromInput, LeafUncheckedCreateWithoutLinkedFromInput>
    where?: LeafWhereInput
  }

  export type LeafUpdateToOneWithWhereWithoutLinkedFromInput = {
    where?: LeafWhereInput
    data: XOR<LeafUpdateWithoutLinkedFromInput, LeafUncheckedUpdateWithoutLinkedFromInput>
  }

  export type LeafUpdateWithoutLinkedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    linkedTo?: LeafLinkUpdateManyWithoutSourceLeafNestedInput
  }

  export type LeafUncheckedUpdateWithoutLinkedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    linkedTo?: LeafLinkUncheckedUpdateManyWithoutSourceLeafNestedInput
  }

  export type LeafCreateManyUserInput = {
    id?: string
    title: string
    content: string
    tags?: LeafCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeafUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTo?: LeafLinkUpdateManyWithoutSourceLeafNestedInput
    linkedFrom?: LeafLinkUpdateManyWithoutTargetLeafNestedInput
  }

  export type LeafUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedTo?: LeafLinkUncheckedUpdateManyWithoutSourceLeafNestedInput
    linkedFrom?: LeafLinkUncheckedUpdateManyWithoutTargetLeafNestedInput
  }

  export type LeafUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: LeafUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafLinkCreateManySourceLeafInput = {
    id?: string
    targetLeafId: string
    createdAt?: Date | string
  }

  export type LeafLinkCreateManyTargetLeafInput = {
    id?: string
    sourceLeafId: string
    createdAt?: Date | string
  }

  export type LeafLinkUpdateWithoutSourceLeafInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetLeaf?: LeafUpdateOneRequiredWithoutLinkedFromNestedInput
  }

  export type LeafLinkUncheckedUpdateWithoutSourceLeafInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetLeafId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafLinkUncheckedUpdateManyWithoutSourceLeafInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetLeafId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafLinkUpdateWithoutTargetLeafInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceLeaf?: LeafUpdateOneRequiredWithoutLinkedToNestedInput
  }

  export type LeafLinkUncheckedUpdateWithoutTargetLeafInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLeafId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeafLinkUncheckedUpdateManyWithoutTargetLeafInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLeafId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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