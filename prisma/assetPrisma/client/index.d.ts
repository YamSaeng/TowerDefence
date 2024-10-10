
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
 * Model initGame
 * 
 */
export type initGame = $Result.DefaultSelection<Prisma.$initGamePayload>
/**
 * Model monster
 * 
 */
export type monster = $Result.DefaultSelection<Prisma.$monsterPayload>
/**
 * Model tower
 * 
 */
export type tower = $Result.DefaultSelection<Prisma.$towerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const attackType: {
  singleAttack: 'singleAttack',
  multiAttack: 'multiAttack',
  heal: 'heal'
};

export type attackType = (typeof attackType)[keyof typeof attackType]

}

export type attackType = $Enums.attackType

export const attackType: typeof $Enums.attackType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more InitGames
 * const initGames = await prisma.initGame.findMany()
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
   * // Fetch zero or more InitGames
   * const initGames = await prisma.initGame.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.initGame`: Exposes CRUD operations for the **initGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InitGames
    * const initGames = await prisma.initGame.findMany()
    * ```
    */
  get initGame(): Prisma.initGameDelegate<ExtArgs>;

  /**
   * `prisma.monster`: Exposes CRUD operations for the **monster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monsters
    * const monsters = await prisma.monster.findMany()
    * ```
    */
  get monster(): Prisma.monsterDelegate<ExtArgs>;

  /**
   * `prisma.tower`: Exposes CRUD operations for the **tower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towers
    * const towers = await prisma.tower.findMany()
    * ```
    */
  get tower(): Prisma.towerDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    initGame: 'initGame',
    monster: 'monster',
    tower: 'tower'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "initGame" | "monster" | "tower"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      initGame: {
        payload: Prisma.$initGamePayload<ExtArgs>
        fields: Prisma.initGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.initGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.initGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload>
          }
          findFirst: {
            args: Prisma.initGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.initGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload>
          }
          findMany: {
            args: Prisma.initGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload>[]
          }
          create: {
            args: Prisma.initGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload>
          }
          createMany: {
            args: Prisma.initGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.initGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload>
          }
          update: {
            args: Prisma.initGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload>
          }
          deleteMany: {
            args: Prisma.initGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.initGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.initGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$initGamePayload>
          }
          aggregate: {
            args: Prisma.InitGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInitGame>
          }
          groupBy: {
            args: Prisma.initGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<InitGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.initGameCountArgs<ExtArgs>
            result: $Utils.Optional<InitGameCountAggregateOutputType> | number
          }
        }
      }
      monster: {
        payload: Prisma.$monsterPayload<ExtArgs>
        fields: Prisma.monsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.monsterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.monsterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload>
          }
          findFirst: {
            args: Prisma.monsterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.monsterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload>
          }
          findMany: {
            args: Prisma.monsterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload>[]
          }
          create: {
            args: Prisma.monsterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload>
          }
          createMany: {
            args: Prisma.monsterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.monsterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload>
          }
          update: {
            args: Prisma.monsterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload>
          }
          deleteMany: {
            args: Prisma.monsterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.monsterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.monsterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monsterPayload>
          }
          aggregate: {
            args: Prisma.MonsterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonster>
          }
          groupBy: {
            args: Prisma.monsterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.monsterCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterCountAggregateOutputType> | number
          }
        }
      }
      tower: {
        payload: Prisma.$towerPayload<ExtArgs>
        fields: Prisma.towerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.towerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.towerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload>
          }
          findFirst: {
            args: Prisma.towerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.towerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload>
          }
          findMany: {
            args: Prisma.towerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload>[]
          }
          create: {
            args: Prisma.towerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload>
          }
          createMany: {
            args: Prisma.towerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.towerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload>
          }
          update: {
            args: Prisma.towerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload>
          }
          deleteMany: {
            args: Prisma.towerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.towerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.towerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$towerPayload>
          }
          aggregate: {
            args: Prisma.TowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTower>
          }
          groupBy: {
            args: Prisma.towerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.towerCountArgs<ExtArgs>
            result: $Utils.Optional<TowerCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model initGame
   */

  export type AggregateInitGame = {
    _count: InitGameCountAggregateOutputType | null
    _avg: InitGameAvgAggregateOutputType | null
    _sum: InitGameSumAggregateOutputType | null
    _min: InitGameMinAggregateOutputType | null
    _max: InitGameMaxAggregateOutputType | null
  }

  export type InitGameAvgAggregateOutputType = {
    id: number | null
    baseHp: number | null
    startGold: number | null
    serverHighScore: number | null
  }

  export type InitGameSumAggregateOutputType = {
    id: number | null
    baseHp: number | null
    startGold: number | null
    serverHighScore: number | null
  }

  export type InitGameMinAggregateOutputType = {
    id: number | null
    baseHp: number | null
    startGold: number | null
    serverHighScore: number | null
  }

  export type InitGameMaxAggregateOutputType = {
    id: number | null
    baseHp: number | null
    startGold: number | null
    serverHighScore: number | null
  }

  export type InitGameCountAggregateOutputType = {
    id: number
    baseHp: number
    startGold: number
    serverHighScore: number
    _all: number
  }


  export type InitGameAvgAggregateInputType = {
    id?: true
    baseHp?: true
    startGold?: true
    serverHighScore?: true
  }

  export type InitGameSumAggregateInputType = {
    id?: true
    baseHp?: true
    startGold?: true
    serverHighScore?: true
  }

  export type InitGameMinAggregateInputType = {
    id?: true
    baseHp?: true
    startGold?: true
    serverHighScore?: true
  }

  export type InitGameMaxAggregateInputType = {
    id?: true
    baseHp?: true
    startGold?: true
    serverHighScore?: true
  }

  export type InitGameCountAggregateInputType = {
    id?: true
    baseHp?: true
    startGold?: true
    serverHighScore?: true
    _all?: true
  }

  export type InitGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which initGame to aggregate.
     */
    where?: initGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of initGames to fetch.
     */
    orderBy?: initGameOrderByWithRelationInput | initGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: initGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` initGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` initGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned initGames
    **/
    _count?: true | InitGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InitGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InitGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InitGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InitGameMaxAggregateInputType
  }

  export type GetInitGameAggregateType<T extends InitGameAggregateArgs> = {
        [P in keyof T & keyof AggregateInitGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInitGame[P]>
      : GetScalarType<T[P], AggregateInitGame[P]>
  }




  export type initGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: initGameWhereInput
    orderBy?: initGameOrderByWithAggregationInput | initGameOrderByWithAggregationInput[]
    by: InitGameScalarFieldEnum[] | InitGameScalarFieldEnum
    having?: initGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InitGameCountAggregateInputType | true
    _avg?: InitGameAvgAggregateInputType
    _sum?: InitGameSumAggregateInputType
    _min?: InitGameMinAggregateInputType
    _max?: InitGameMaxAggregateInputType
  }

  export type InitGameGroupByOutputType = {
    id: number
    baseHp: number
    startGold: number
    serverHighScore: number
    _count: InitGameCountAggregateOutputType | null
    _avg: InitGameAvgAggregateOutputType | null
    _sum: InitGameSumAggregateOutputType | null
    _min: InitGameMinAggregateOutputType | null
    _max: InitGameMaxAggregateOutputType | null
  }

  type GetInitGameGroupByPayload<T extends initGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InitGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InitGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InitGameGroupByOutputType[P]>
            : GetScalarType<T[P], InitGameGroupByOutputType[P]>
        }
      >
    >


  export type initGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseHp?: boolean
    startGold?: boolean
    serverHighScore?: boolean
  }, ExtArgs["result"]["initGame"]>


  export type initGameSelectScalar = {
    id?: boolean
    baseHp?: boolean
    startGold?: boolean
    serverHighScore?: boolean
  }


  export type $initGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "initGame"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      baseHp: number
      startGold: number
      serverHighScore: number
    }, ExtArgs["result"]["initGame"]>
    composites: {}
  }

  type initGameGetPayload<S extends boolean | null | undefined | initGameDefaultArgs> = $Result.GetResult<Prisma.$initGamePayload, S>

  type initGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<initGameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InitGameCountAggregateInputType | true
    }

  export interface initGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['initGame'], meta: { name: 'initGame' } }
    /**
     * Find zero or one InitGame that matches the filter.
     * @param {initGameFindUniqueArgs} args - Arguments to find a InitGame
     * @example
     * // Get one InitGame
     * const initGame = await prisma.initGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends initGameFindUniqueArgs>(args: SelectSubset<T, initGameFindUniqueArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InitGame that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {initGameFindUniqueOrThrowArgs} args - Arguments to find a InitGame
     * @example
     * // Get one InitGame
     * const initGame = await prisma.initGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends initGameFindUniqueOrThrowArgs>(args: SelectSubset<T, initGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InitGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {initGameFindFirstArgs} args - Arguments to find a InitGame
     * @example
     * // Get one InitGame
     * const initGame = await prisma.initGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends initGameFindFirstArgs>(args?: SelectSubset<T, initGameFindFirstArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InitGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {initGameFindFirstOrThrowArgs} args - Arguments to find a InitGame
     * @example
     * // Get one InitGame
     * const initGame = await prisma.initGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends initGameFindFirstOrThrowArgs>(args?: SelectSubset<T, initGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InitGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {initGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InitGames
     * const initGames = await prisma.initGame.findMany()
     * 
     * // Get first 10 InitGames
     * const initGames = await prisma.initGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const initGameWithIdOnly = await prisma.initGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends initGameFindManyArgs>(args?: SelectSubset<T, initGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InitGame.
     * @param {initGameCreateArgs} args - Arguments to create a InitGame.
     * @example
     * // Create one InitGame
     * const InitGame = await prisma.initGame.create({
     *   data: {
     *     // ... data to create a InitGame
     *   }
     * })
     * 
     */
    create<T extends initGameCreateArgs>(args: SelectSubset<T, initGameCreateArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InitGames.
     * @param {initGameCreateManyArgs} args - Arguments to create many InitGames.
     * @example
     * // Create many InitGames
     * const initGame = await prisma.initGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends initGameCreateManyArgs>(args?: SelectSubset<T, initGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InitGame.
     * @param {initGameDeleteArgs} args - Arguments to delete one InitGame.
     * @example
     * // Delete one InitGame
     * const InitGame = await prisma.initGame.delete({
     *   where: {
     *     // ... filter to delete one InitGame
     *   }
     * })
     * 
     */
    delete<T extends initGameDeleteArgs>(args: SelectSubset<T, initGameDeleteArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InitGame.
     * @param {initGameUpdateArgs} args - Arguments to update one InitGame.
     * @example
     * // Update one InitGame
     * const initGame = await prisma.initGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends initGameUpdateArgs>(args: SelectSubset<T, initGameUpdateArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InitGames.
     * @param {initGameDeleteManyArgs} args - Arguments to filter InitGames to delete.
     * @example
     * // Delete a few InitGames
     * const { count } = await prisma.initGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends initGameDeleteManyArgs>(args?: SelectSubset<T, initGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InitGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {initGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InitGames
     * const initGame = await prisma.initGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends initGameUpdateManyArgs>(args: SelectSubset<T, initGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InitGame.
     * @param {initGameUpsertArgs} args - Arguments to update or create a InitGame.
     * @example
     * // Update or create a InitGame
     * const initGame = await prisma.initGame.upsert({
     *   create: {
     *     // ... data to create a InitGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InitGame we want to update
     *   }
     * })
     */
    upsert<T extends initGameUpsertArgs>(args: SelectSubset<T, initGameUpsertArgs<ExtArgs>>): Prisma__initGameClient<$Result.GetResult<Prisma.$initGamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InitGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {initGameCountArgs} args - Arguments to filter InitGames to count.
     * @example
     * // Count the number of InitGames
     * const count = await prisma.initGame.count({
     *   where: {
     *     // ... the filter for the InitGames we want to count
     *   }
     * })
    **/
    count<T extends initGameCountArgs>(
      args?: Subset<T, initGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InitGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InitGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InitGameAggregateArgs>(args: Subset<T, InitGameAggregateArgs>): Prisma.PrismaPromise<GetInitGameAggregateType<T>>

    /**
     * Group by InitGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {initGameGroupByArgs} args - Group by arguments.
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
      T extends initGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: initGameGroupByArgs['orderBy'] }
        : { orderBy?: initGameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, initGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInitGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the initGame model
   */
  readonly fields: initGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for initGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__initGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the initGame model
   */ 
  interface initGameFieldRefs {
    readonly id: FieldRef<"initGame", 'Int'>
    readonly baseHp: FieldRef<"initGame", 'Int'>
    readonly startGold: FieldRef<"initGame", 'Int'>
    readonly serverHighScore: FieldRef<"initGame", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * initGame findUnique
   */
  export type initGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * Filter, which initGame to fetch.
     */
    where: initGameWhereUniqueInput
  }

  /**
   * initGame findUniqueOrThrow
   */
  export type initGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * Filter, which initGame to fetch.
     */
    where: initGameWhereUniqueInput
  }

  /**
   * initGame findFirst
   */
  export type initGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * Filter, which initGame to fetch.
     */
    where?: initGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of initGames to fetch.
     */
    orderBy?: initGameOrderByWithRelationInput | initGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for initGames.
     */
    cursor?: initGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` initGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` initGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of initGames.
     */
    distinct?: InitGameScalarFieldEnum | InitGameScalarFieldEnum[]
  }

  /**
   * initGame findFirstOrThrow
   */
  export type initGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * Filter, which initGame to fetch.
     */
    where?: initGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of initGames to fetch.
     */
    orderBy?: initGameOrderByWithRelationInput | initGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for initGames.
     */
    cursor?: initGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` initGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` initGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of initGames.
     */
    distinct?: InitGameScalarFieldEnum | InitGameScalarFieldEnum[]
  }

  /**
   * initGame findMany
   */
  export type initGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * Filter, which initGames to fetch.
     */
    where?: initGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of initGames to fetch.
     */
    orderBy?: initGameOrderByWithRelationInput | initGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing initGames.
     */
    cursor?: initGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` initGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` initGames.
     */
    skip?: number
    distinct?: InitGameScalarFieldEnum | InitGameScalarFieldEnum[]
  }

  /**
   * initGame create
   */
  export type initGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * The data needed to create a initGame.
     */
    data: XOR<initGameCreateInput, initGameUncheckedCreateInput>
  }

  /**
   * initGame createMany
   */
  export type initGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many initGames.
     */
    data: initGameCreateManyInput | initGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * initGame update
   */
  export type initGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * The data needed to update a initGame.
     */
    data: XOR<initGameUpdateInput, initGameUncheckedUpdateInput>
    /**
     * Choose, which initGame to update.
     */
    where: initGameWhereUniqueInput
  }

  /**
   * initGame updateMany
   */
  export type initGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update initGames.
     */
    data: XOR<initGameUpdateManyMutationInput, initGameUncheckedUpdateManyInput>
    /**
     * Filter which initGames to update
     */
    where?: initGameWhereInput
  }

  /**
   * initGame upsert
   */
  export type initGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * The filter to search for the initGame to update in case it exists.
     */
    where: initGameWhereUniqueInput
    /**
     * In case the initGame found by the `where` argument doesn't exist, create a new initGame with this data.
     */
    create: XOR<initGameCreateInput, initGameUncheckedCreateInput>
    /**
     * In case the initGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<initGameUpdateInput, initGameUncheckedUpdateInput>
  }

  /**
   * initGame delete
   */
  export type initGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
    /**
     * Filter which initGame to delete.
     */
    where: initGameWhereUniqueInput
  }

  /**
   * initGame deleteMany
   */
  export type initGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which initGames to delete
     */
    where?: initGameWhereInput
  }

  /**
   * initGame without action
   */
  export type initGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the initGame
     */
    select?: initGameSelect<ExtArgs> | null
  }


  /**
   * Model monster
   */

  export type AggregateMonster = {
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  export type MonsterAvgAggregateOutputType = {
    id: number | null
    hp: number | null
    atk: number | null
    speed: number | null
    score: number | null
    gold: number | null
    stage: number | null
    grade: number | null
  }

  export type MonsterSumAggregateOutputType = {
    id: number | null
    hp: number | null
    atk: number | null
    speed: number | null
    score: number | null
    gold: number | null
    stage: number | null
    grade: number | null
  }

  export type MonsterMinAggregateOutputType = {
    id: number | null
    hp: number | null
    atk: number | null
    speed: number | null
    score: number | null
    gold: number | null
    stage: number | null
    grade: number | null
  }

  export type MonsterMaxAggregateOutputType = {
    id: number | null
    hp: number | null
    atk: number | null
    speed: number | null
    score: number | null
    gold: number | null
    stage: number | null
    grade: number | null
  }

  export type MonsterCountAggregateOutputType = {
    id: number
    hp: number
    atk: number
    speed: number
    score: number
    gold: number
    stage: number
    grade: number
    _all: number
  }


  export type MonsterAvgAggregateInputType = {
    id?: true
    hp?: true
    atk?: true
    speed?: true
    score?: true
    gold?: true
    stage?: true
    grade?: true
  }

  export type MonsterSumAggregateInputType = {
    id?: true
    hp?: true
    atk?: true
    speed?: true
    score?: true
    gold?: true
    stage?: true
    grade?: true
  }

  export type MonsterMinAggregateInputType = {
    id?: true
    hp?: true
    atk?: true
    speed?: true
    score?: true
    gold?: true
    stage?: true
    grade?: true
  }

  export type MonsterMaxAggregateInputType = {
    id?: true
    hp?: true
    atk?: true
    speed?: true
    score?: true
    gold?: true
    stage?: true
    grade?: true
  }

  export type MonsterCountAggregateInputType = {
    id?: true
    hp?: true
    atk?: true
    speed?: true
    score?: true
    gold?: true
    stage?: true
    grade?: true
    _all?: true
  }

  export type MonsterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monster to aggregate.
     */
    where?: monsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsters to fetch.
     */
    orderBy?: monsterOrderByWithRelationInput | monsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: monsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned monsters
    **/
    _count?: true | MonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterMaxAggregateInputType
  }

  export type GetMonsterAggregateType<T extends MonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonster[P]>
      : GetScalarType<T[P], AggregateMonster[P]>
  }




  export type monsterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monsterWhereInput
    orderBy?: monsterOrderByWithAggregationInput | monsterOrderByWithAggregationInput[]
    by: MonsterScalarFieldEnum[] | MonsterScalarFieldEnum
    having?: monsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterCountAggregateInputType | true
    _avg?: MonsterAvgAggregateInputType
    _sum?: MonsterSumAggregateInputType
    _min?: MonsterMinAggregateInputType
    _max?: MonsterMaxAggregateInputType
  }

  export type MonsterGroupByOutputType = {
    id: number
    hp: number
    atk: number
    speed: number
    score: number
    gold: number
    stage: number
    grade: number
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  type GetMonsterGroupByPayload<T extends monsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterGroupByOutputType[P]>
        }
      >
    >


  export type monsterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hp?: boolean
    atk?: boolean
    speed?: boolean
    score?: boolean
    gold?: boolean
    stage?: boolean
    grade?: boolean
  }, ExtArgs["result"]["monster"]>


  export type monsterSelectScalar = {
    id?: boolean
    hp?: boolean
    atk?: boolean
    speed?: boolean
    score?: boolean
    gold?: boolean
    stage?: boolean
    grade?: boolean
  }


  export type $monsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "monster"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hp: number
      atk: number
      speed: number
      score: number
      gold: number
      stage: number
      grade: number
    }, ExtArgs["result"]["monster"]>
    composites: {}
  }

  type monsterGetPayload<S extends boolean | null | undefined | monsterDefaultArgs> = $Result.GetResult<Prisma.$monsterPayload, S>

  type monsterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<monsterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonsterCountAggregateInputType | true
    }

  export interface monsterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['monster'], meta: { name: 'monster' } }
    /**
     * Find zero or one Monster that matches the filter.
     * @param {monsterFindUniqueArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends monsterFindUniqueArgs>(args: SelectSubset<T, monsterFindUniqueArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Monster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {monsterFindUniqueOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends monsterFindUniqueOrThrowArgs>(args: SelectSubset<T, monsterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Monster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterFindFirstArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends monsterFindFirstArgs>(args?: SelectSubset<T, monsterFindFirstArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Monster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterFindFirstOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends monsterFindFirstOrThrowArgs>(args?: SelectSubset<T, monsterFindFirstOrThrowArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Monsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monsters
     * const monsters = await prisma.monster.findMany()
     * 
     * // Get first 10 Monsters
     * const monsters = await prisma.monster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterWithIdOnly = await prisma.monster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends monsterFindManyArgs>(args?: SelectSubset<T, monsterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Monster.
     * @param {monsterCreateArgs} args - Arguments to create a Monster.
     * @example
     * // Create one Monster
     * const Monster = await prisma.monster.create({
     *   data: {
     *     // ... data to create a Monster
     *   }
     * })
     * 
     */
    create<T extends monsterCreateArgs>(args: SelectSubset<T, monsterCreateArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Monsters.
     * @param {monsterCreateManyArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends monsterCreateManyArgs>(args?: SelectSubset<T, monsterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Monster.
     * @param {monsterDeleteArgs} args - Arguments to delete one Monster.
     * @example
     * // Delete one Monster
     * const Monster = await prisma.monster.delete({
     *   where: {
     *     // ... filter to delete one Monster
     *   }
     * })
     * 
     */
    delete<T extends monsterDeleteArgs>(args: SelectSubset<T, monsterDeleteArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Monster.
     * @param {monsterUpdateArgs} args - Arguments to update one Monster.
     * @example
     * // Update one Monster
     * const monster = await prisma.monster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends monsterUpdateArgs>(args: SelectSubset<T, monsterUpdateArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Monsters.
     * @param {monsterDeleteManyArgs} args - Arguments to filter Monsters to delete.
     * @example
     * // Delete a few Monsters
     * const { count } = await prisma.monster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends monsterDeleteManyArgs>(args?: SelectSubset<T, monsterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends monsterUpdateManyArgs>(args: SelectSubset<T, monsterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Monster.
     * @param {monsterUpsertArgs} args - Arguments to update or create a Monster.
     * @example
     * // Update or create a Monster
     * const monster = await prisma.monster.upsert({
     *   create: {
     *     // ... data to create a Monster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monster we want to update
     *   }
     * })
     */
    upsert<T extends monsterUpsertArgs>(args: SelectSubset<T, monsterUpsertArgs<ExtArgs>>): Prisma__monsterClient<$Result.GetResult<Prisma.$monsterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterCountArgs} args - Arguments to filter Monsters to count.
     * @example
     * // Count the number of Monsters
     * const count = await prisma.monster.count({
     *   where: {
     *     // ... the filter for the Monsters we want to count
     *   }
     * })
    **/
    count<T extends monsterCountArgs>(
      args?: Subset<T, monsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterAggregateArgs>(args: Subset<T, MonsterAggregateArgs>): Prisma.PrismaPromise<GetMonsterAggregateType<T>>

    /**
     * Group by Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monsterGroupByArgs} args - Group by arguments.
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
      T extends monsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: monsterGroupByArgs['orderBy'] }
        : { orderBy?: monsterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, monsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the monster model
   */
  readonly fields: monsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for monster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__monsterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the monster model
   */ 
  interface monsterFieldRefs {
    readonly id: FieldRef<"monster", 'Int'>
    readonly hp: FieldRef<"monster", 'Int'>
    readonly atk: FieldRef<"monster", 'Int'>
    readonly speed: FieldRef<"monster", 'Int'>
    readonly score: FieldRef<"monster", 'Int'>
    readonly gold: FieldRef<"monster", 'Int'>
    readonly stage: FieldRef<"monster", 'Int'>
    readonly grade: FieldRef<"monster", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * monster findUnique
   */
  export type monsterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * Filter, which monster to fetch.
     */
    where: monsterWhereUniqueInput
  }

  /**
   * monster findUniqueOrThrow
   */
  export type monsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * Filter, which monster to fetch.
     */
    where: monsterWhereUniqueInput
  }

  /**
   * monster findFirst
   */
  export type monsterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * Filter, which monster to fetch.
     */
    where?: monsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsters to fetch.
     */
    orderBy?: monsterOrderByWithRelationInput | monsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monsters.
     */
    cursor?: monsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * monster findFirstOrThrow
   */
  export type monsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * Filter, which monster to fetch.
     */
    where?: monsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsters to fetch.
     */
    orderBy?: monsterOrderByWithRelationInput | monsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monsters.
     */
    cursor?: monsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * monster findMany
   */
  export type monsterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * Filter, which monsters to fetch.
     */
    where?: monsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monsters to fetch.
     */
    orderBy?: monsterOrderByWithRelationInput | monsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing monsters.
     */
    cursor?: monsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monsters.
     */
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * monster create
   */
  export type monsterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * The data needed to create a monster.
     */
    data: XOR<monsterCreateInput, monsterUncheckedCreateInput>
  }

  /**
   * monster createMany
   */
  export type monsterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many monsters.
     */
    data: monsterCreateManyInput | monsterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monster update
   */
  export type monsterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * The data needed to update a monster.
     */
    data: XOR<monsterUpdateInput, monsterUncheckedUpdateInput>
    /**
     * Choose, which monster to update.
     */
    where: monsterWhereUniqueInput
  }

  /**
   * monster updateMany
   */
  export type monsterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update monsters.
     */
    data: XOR<monsterUpdateManyMutationInput, monsterUncheckedUpdateManyInput>
    /**
     * Filter which monsters to update
     */
    where?: monsterWhereInput
  }

  /**
   * monster upsert
   */
  export type monsterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * The filter to search for the monster to update in case it exists.
     */
    where: monsterWhereUniqueInput
    /**
     * In case the monster found by the `where` argument doesn't exist, create a new monster with this data.
     */
    create: XOR<monsterCreateInput, monsterUncheckedCreateInput>
    /**
     * In case the monster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<monsterUpdateInput, monsterUncheckedUpdateInput>
  }

  /**
   * monster delete
   */
  export type monsterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
    /**
     * Filter which monster to delete.
     */
    where: monsterWhereUniqueInput
  }

  /**
   * monster deleteMany
   */
  export type monsterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monsters to delete
     */
    where?: monsterWhereInput
  }

  /**
   * monster without action
   */
  export type monsterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monster
     */
    select?: monsterSelect<ExtArgs> | null
  }


  /**
   * Model tower
   */

  export type AggregateTower = {
    _count: TowerCountAggregateOutputType | null
    _avg: TowerAvgAggregateOutputType | null
    _sum: TowerSumAggregateOutputType | null
    _min: TowerMinAggregateOutputType | null
    _max: TowerMaxAggregateOutputType | null
  }

  export type TowerAvgAggregateOutputType = {
    id: number | null
    attackPower: number | null
    attackSpeed: number | null
    attackRange: number | null
    towerPrice: number | null
    upgradeAttackPower: number | null
  }

  export type TowerSumAggregateOutputType = {
    id: number | null
    attackPower: number | null
    attackSpeed: number | null
    attackRange: number | null
    towerPrice: number | null
    upgradeAttackPower: number | null
  }

  export type TowerMinAggregateOutputType = {
    id: number | null
    towerName: string | null
    attackPower: number | null
    attackSpeed: number | null
    attackRange: number | null
    attackType: $Enums.attackType | null
    towerPrice: number | null
    upgradeAttackPower: number | null
  }

  export type TowerMaxAggregateOutputType = {
    id: number | null
    towerName: string | null
    attackPower: number | null
    attackSpeed: number | null
    attackRange: number | null
    attackType: $Enums.attackType | null
    towerPrice: number | null
    upgradeAttackPower: number | null
  }

  export type TowerCountAggregateOutputType = {
    id: number
    towerName: number
    attackPower: number
    attackSpeed: number
    attackRange: number
    attackType: number
    towerPrice: number
    upgradeAttackPower: number
    _all: number
  }


  export type TowerAvgAggregateInputType = {
    id?: true
    attackPower?: true
    attackSpeed?: true
    attackRange?: true
    towerPrice?: true
    upgradeAttackPower?: true
  }

  export type TowerSumAggregateInputType = {
    id?: true
    attackPower?: true
    attackSpeed?: true
    attackRange?: true
    towerPrice?: true
    upgradeAttackPower?: true
  }

  export type TowerMinAggregateInputType = {
    id?: true
    towerName?: true
    attackPower?: true
    attackSpeed?: true
    attackRange?: true
    attackType?: true
    towerPrice?: true
    upgradeAttackPower?: true
  }

  export type TowerMaxAggregateInputType = {
    id?: true
    towerName?: true
    attackPower?: true
    attackSpeed?: true
    attackRange?: true
    attackType?: true
    towerPrice?: true
    upgradeAttackPower?: true
  }

  export type TowerCountAggregateInputType = {
    id?: true
    towerName?: true
    attackPower?: true
    attackSpeed?: true
    attackRange?: true
    attackType?: true
    towerPrice?: true
    upgradeAttackPower?: true
    _all?: true
  }

  export type TowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tower to aggregate.
     */
    where?: towerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towerOrderByWithRelationInput | towerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: towerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned towers
    **/
    _count?: true | TowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TowerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TowerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TowerMaxAggregateInputType
  }

  export type GetTowerAggregateType<T extends TowerAggregateArgs> = {
        [P in keyof T & keyof AggregateTower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTower[P]>
      : GetScalarType<T[P], AggregateTower[P]>
  }




  export type towerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: towerWhereInput
    orderBy?: towerOrderByWithAggregationInput | towerOrderByWithAggregationInput[]
    by: TowerScalarFieldEnum[] | TowerScalarFieldEnum
    having?: towerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TowerCountAggregateInputType | true
    _avg?: TowerAvgAggregateInputType
    _sum?: TowerSumAggregateInputType
    _min?: TowerMinAggregateInputType
    _max?: TowerMaxAggregateInputType
  }

  export type TowerGroupByOutputType = {
    id: number
    towerName: string
    attackPower: number
    attackSpeed: number
    attackRange: number
    attackType: $Enums.attackType
    towerPrice: number
    upgradeAttackPower: number
    _count: TowerCountAggregateOutputType | null
    _avg: TowerAvgAggregateOutputType | null
    _sum: TowerSumAggregateOutputType | null
    _min: TowerMinAggregateOutputType | null
    _max: TowerMaxAggregateOutputType | null
  }

  type GetTowerGroupByPayload<T extends towerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TowerGroupByOutputType[P]>
            : GetScalarType<T[P], TowerGroupByOutputType[P]>
        }
      >
    >


  export type towerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    towerName?: boolean
    attackPower?: boolean
    attackSpeed?: boolean
    attackRange?: boolean
    attackType?: boolean
    towerPrice?: boolean
    upgradeAttackPower?: boolean
  }, ExtArgs["result"]["tower"]>


  export type towerSelectScalar = {
    id?: boolean
    towerName?: boolean
    attackPower?: boolean
    attackSpeed?: boolean
    attackRange?: boolean
    attackType?: boolean
    towerPrice?: boolean
    upgradeAttackPower?: boolean
  }


  export type $towerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tower"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      towerName: string
      attackPower: number
      attackSpeed: number
      attackRange: number
      attackType: $Enums.attackType
      towerPrice: number
      upgradeAttackPower: number
    }, ExtArgs["result"]["tower"]>
    composites: {}
  }

  type towerGetPayload<S extends boolean | null | undefined | towerDefaultArgs> = $Result.GetResult<Prisma.$towerPayload, S>

  type towerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<towerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TowerCountAggregateInputType | true
    }

  export interface towerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tower'], meta: { name: 'tower' } }
    /**
     * Find zero or one Tower that matches the filter.
     * @param {towerFindUniqueArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends towerFindUniqueArgs>(args: SelectSubset<T, towerFindUniqueArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tower that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {towerFindUniqueOrThrowArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends towerFindUniqueOrThrowArgs>(args: SelectSubset<T, towerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerFindFirstArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends towerFindFirstArgs>(args?: SelectSubset<T, towerFindFirstArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerFindFirstOrThrowArgs} args - Arguments to find a Tower
     * @example
     * // Get one Tower
     * const tower = await prisma.tower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends towerFindFirstOrThrowArgs>(args?: SelectSubset<T, towerFindFirstOrThrowArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Towers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Towers
     * const towers = await prisma.tower.findMany()
     * 
     * // Get first 10 Towers
     * const towers = await prisma.tower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const towerWithIdOnly = await prisma.tower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends towerFindManyArgs>(args?: SelectSubset<T, towerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tower.
     * @param {towerCreateArgs} args - Arguments to create a Tower.
     * @example
     * // Create one Tower
     * const Tower = await prisma.tower.create({
     *   data: {
     *     // ... data to create a Tower
     *   }
     * })
     * 
     */
    create<T extends towerCreateArgs>(args: SelectSubset<T, towerCreateArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Towers.
     * @param {towerCreateManyArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const tower = await prisma.tower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends towerCreateManyArgs>(args?: SelectSubset<T, towerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tower.
     * @param {towerDeleteArgs} args - Arguments to delete one Tower.
     * @example
     * // Delete one Tower
     * const Tower = await prisma.tower.delete({
     *   where: {
     *     // ... filter to delete one Tower
     *   }
     * })
     * 
     */
    delete<T extends towerDeleteArgs>(args: SelectSubset<T, towerDeleteArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tower.
     * @param {towerUpdateArgs} args - Arguments to update one Tower.
     * @example
     * // Update one Tower
     * const tower = await prisma.tower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends towerUpdateArgs>(args: SelectSubset<T, towerUpdateArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Towers.
     * @param {towerDeleteManyArgs} args - Arguments to filter Towers to delete.
     * @example
     * // Delete a few Towers
     * const { count } = await prisma.tower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends towerDeleteManyArgs>(args?: SelectSubset<T, towerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Towers
     * const tower = await prisma.tower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends towerUpdateManyArgs>(args: SelectSubset<T, towerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tower.
     * @param {towerUpsertArgs} args - Arguments to update or create a Tower.
     * @example
     * // Update or create a Tower
     * const tower = await prisma.tower.upsert({
     *   create: {
     *     // ... data to create a Tower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tower we want to update
     *   }
     * })
     */
    upsert<T extends towerUpsertArgs>(args: SelectSubset<T, towerUpsertArgs<ExtArgs>>): Prisma__towerClient<$Result.GetResult<Prisma.$towerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerCountArgs} args - Arguments to filter Towers to count.
     * @example
     * // Count the number of Towers
     * const count = await prisma.tower.count({
     *   where: {
     *     // ... the filter for the Towers we want to count
     *   }
     * })
    **/
    count<T extends towerCountArgs>(
      args?: Subset<T, towerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TowerAggregateArgs>(args: Subset<T, TowerAggregateArgs>): Prisma.PrismaPromise<GetTowerAggregateType<T>>

    /**
     * Group by Tower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {towerGroupByArgs} args - Group by arguments.
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
      T extends towerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: towerGroupByArgs['orderBy'] }
        : { orderBy?: towerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, towerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tower model
   */
  readonly fields: towerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__towerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the tower model
   */ 
  interface towerFieldRefs {
    readonly id: FieldRef<"tower", 'Int'>
    readonly towerName: FieldRef<"tower", 'String'>
    readonly attackPower: FieldRef<"tower", 'Int'>
    readonly attackSpeed: FieldRef<"tower", 'Int'>
    readonly attackRange: FieldRef<"tower", 'Int'>
    readonly attackType: FieldRef<"tower", 'attackType'>
    readonly towerPrice: FieldRef<"tower", 'Int'>
    readonly upgradeAttackPower: FieldRef<"tower", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tower findUnique
   */
  export type towerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * Filter, which tower to fetch.
     */
    where: towerWhereUniqueInput
  }

  /**
   * tower findUniqueOrThrow
   */
  export type towerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * Filter, which tower to fetch.
     */
    where: towerWhereUniqueInput
  }

  /**
   * tower findFirst
   */
  export type towerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * Filter, which tower to fetch.
     */
    where?: towerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towerOrderByWithRelationInput | towerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towers.
     */
    cursor?: towerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * tower findFirstOrThrow
   */
  export type towerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * Filter, which tower to fetch.
     */
    where?: towerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towerOrderByWithRelationInput | towerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towers.
     */
    cursor?: towerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towers.
     */
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * tower findMany
   */
  export type towerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * Filter, which towers to fetch.
     */
    where?: towerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towers to fetch.
     */
    orderBy?: towerOrderByWithRelationInput | towerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing towers.
     */
    cursor?: towerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towers.
     */
    skip?: number
    distinct?: TowerScalarFieldEnum | TowerScalarFieldEnum[]
  }

  /**
   * tower create
   */
  export type towerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * The data needed to create a tower.
     */
    data: XOR<towerCreateInput, towerUncheckedCreateInput>
  }

  /**
   * tower createMany
   */
  export type towerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many towers.
     */
    data: towerCreateManyInput | towerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tower update
   */
  export type towerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * The data needed to update a tower.
     */
    data: XOR<towerUpdateInput, towerUncheckedUpdateInput>
    /**
     * Choose, which tower to update.
     */
    where: towerWhereUniqueInput
  }

  /**
   * tower updateMany
   */
  export type towerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update towers.
     */
    data: XOR<towerUpdateManyMutationInput, towerUncheckedUpdateManyInput>
    /**
     * Filter which towers to update
     */
    where?: towerWhereInput
  }

  /**
   * tower upsert
   */
  export type towerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * The filter to search for the tower to update in case it exists.
     */
    where: towerWhereUniqueInput
    /**
     * In case the tower found by the `where` argument doesn't exist, create a new tower with this data.
     */
    create: XOR<towerCreateInput, towerUncheckedCreateInput>
    /**
     * In case the tower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<towerUpdateInput, towerUncheckedUpdateInput>
  }

  /**
   * tower delete
   */
  export type towerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
    /**
     * Filter which tower to delete.
     */
    where: towerWhereUniqueInput
  }

  /**
   * tower deleteMany
   */
  export type towerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which towers to delete
     */
    where?: towerWhereInput
  }

  /**
   * tower without action
   */
  export type towerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower
     */
    select?: towerSelect<ExtArgs> | null
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


  export const InitGameScalarFieldEnum: {
    id: 'id',
    baseHp: 'baseHp',
    startGold: 'startGold',
    serverHighScore: 'serverHighScore'
  };

  export type InitGameScalarFieldEnum = (typeof InitGameScalarFieldEnum)[keyof typeof InitGameScalarFieldEnum]


  export const MonsterScalarFieldEnum: {
    id: 'id',
    hp: 'hp',
    atk: 'atk',
    speed: 'speed',
    score: 'score',
    gold: 'gold',
    stage: 'stage',
    grade: 'grade'
  };

  export type MonsterScalarFieldEnum = (typeof MonsterScalarFieldEnum)[keyof typeof MonsterScalarFieldEnum]


  export const TowerScalarFieldEnum: {
    id: 'id',
    towerName: 'towerName',
    attackPower: 'attackPower',
    attackSpeed: 'attackSpeed',
    attackRange: 'attackRange',
    attackType: 'attackType',
    towerPrice: 'towerPrice',
    upgradeAttackPower: 'upgradeAttackPower'
  };

  export type TowerScalarFieldEnum = (typeof TowerScalarFieldEnum)[keyof typeof TowerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'attackType'
   */
  export type EnumattackTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'attackType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type initGameWhereInput = {
    AND?: initGameWhereInput | initGameWhereInput[]
    OR?: initGameWhereInput[]
    NOT?: initGameWhereInput | initGameWhereInput[]
    id?: IntFilter<"initGame"> | number
    baseHp?: IntFilter<"initGame"> | number
    startGold?: IntFilter<"initGame"> | number
    serverHighScore?: IntFilter<"initGame"> | number
  }

  export type initGameOrderByWithRelationInput = {
    id?: SortOrder
    baseHp?: SortOrder
    startGold?: SortOrder
    serverHighScore?: SortOrder
  }

  export type initGameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: initGameWhereInput | initGameWhereInput[]
    OR?: initGameWhereInput[]
    NOT?: initGameWhereInput | initGameWhereInput[]
    baseHp?: IntFilter<"initGame"> | number
    startGold?: IntFilter<"initGame"> | number
    serverHighScore?: IntFilter<"initGame"> | number
  }, "id">

  export type initGameOrderByWithAggregationInput = {
    id?: SortOrder
    baseHp?: SortOrder
    startGold?: SortOrder
    serverHighScore?: SortOrder
    _count?: initGameCountOrderByAggregateInput
    _avg?: initGameAvgOrderByAggregateInput
    _max?: initGameMaxOrderByAggregateInput
    _min?: initGameMinOrderByAggregateInput
    _sum?: initGameSumOrderByAggregateInput
  }

  export type initGameScalarWhereWithAggregatesInput = {
    AND?: initGameScalarWhereWithAggregatesInput | initGameScalarWhereWithAggregatesInput[]
    OR?: initGameScalarWhereWithAggregatesInput[]
    NOT?: initGameScalarWhereWithAggregatesInput | initGameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"initGame"> | number
    baseHp?: IntWithAggregatesFilter<"initGame"> | number
    startGold?: IntWithAggregatesFilter<"initGame"> | number
    serverHighScore?: IntWithAggregatesFilter<"initGame"> | number
  }

  export type monsterWhereInput = {
    AND?: monsterWhereInput | monsterWhereInput[]
    OR?: monsterWhereInput[]
    NOT?: monsterWhereInput | monsterWhereInput[]
    id?: IntFilter<"monster"> | number
    hp?: IntFilter<"monster"> | number
    atk?: IntFilter<"monster"> | number
    speed?: IntFilter<"monster"> | number
    score?: IntFilter<"monster"> | number
    gold?: IntFilter<"monster"> | number
    stage?: IntFilter<"monster"> | number
    grade?: IntFilter<"monster"> | number
  }

  export type monsterOrderByWithRelationInput = {
    id?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    speed?: SortOrder
    score?: SortOrder
    gold?: SortOrder
    stage?: SortOrder
    grade?: SortOrder
  }

  export type monsterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: monsterWhereInput | monsterWhereInput[]
    OR?: monsterWhereInput[]
    NOT?: monsterWhereInput | monsterWhereInput[]
    hp?: IntFilter<"monster"> | number
    atk?: IntFilter<"monster"> | number
    speed?: IntFilter<"monster"> | number
    score?: IntFilter<"monster"> | number
    gold?: IntFilter<"monster"> | number
    stage?: IntFilter<"monster"> | number
    grade?: IntFilter<"monster"> | number
  }, "id">

  export type monsterOrderByWithAggregationInput = {
    id?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    speed?: SortOrder
    score?: SortOrder
    gold?: SortOrder
    stage?: SortOrder
    grade?: SortOrder
    _count?: monsterCountOrderByAggregateInput
    _avg?: monsterAvgOrderByAggregateInput
    _max?: monsterMaxOrderByAggregateInput
    _min?: monsterMinOrderByAggregateInput
    _sum?: monsterSumOrderByAggregateInput
  }

  export type monsterScalarWhereWithAggregatesInput = {
    AND?: monsterScalarWhereWithAggregatesInput | monsterScalarWhereWithAggregatesInput[]
    OR?: monsterScalarWhereWithAggregatesInput[]
    NOT?: monsterScalarWhereWithAggregatesInput | monsterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"monster"> | number
    hp?: IntWithAggregatesFilter<"monster"> | number
    atk?: IntWithAggregatesFilter<"monster"> | number
    speed?: IntWithAggregatesFilter<"monster"> | number
    score?: IntWithAggregatesFilter<"monster"> | number
    gold?: IntWithAggregatesFilter<"monster"> | number
    stage?: IntWithAggregatesFilter<"monster"> | number
    grade?: IntWithAggregatesFilter<"monster"> | number
  }

  export type towerWhereInput = {
    AND?: towerWhereInput | towerWhereInput[]
    OR?: towerWhereInput[]
    NOT?: towerWhereInput | towerWhereInput[]
    id?: IntFilter<"tower"> | number
    towerName?: StringFilter<"tower"> | string
    attackPower?: IntFilter<"tower"> | number
    attackSpeed?: IntFilter<"tower"> | number
    attackRange?: IntFilter<"tower"> | number
    attackType?: EnumattackTypeFilter<"tower"> | $Enums.attackType
    towerPrice?: IntFilter<"tower"> | number
    upgradeAttackPower?: IntFilter<"tower"> | number
  }

  export type towerOrderByWithRelationInput = {
    id?: SortOrder
    towerName?: SortOrder
    attackPower?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    attackType?: SortOrder
    towerPrice?: SortOrder
    upgradeAttackPower?: SortOrder
  }

  export type towerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: towerWhereInput | towerWhereInput[]
    OR?: towerWhereInput[]
    NOT?: towerWhereInput | towerWhereInput[]
    towerName?: StringFilter<"tower"> | string
    attackPower?: IntFilter<"tower"> | number
    attackSpeed?: IntFilter<"tower"> | number
    attackRange?: IntFilter<"tower"> | number
    attackType?: EnumattackTypeFilter<"tower"> | $Enums.attackType
    towerPrice?: IntFilter<"tower"> | number
    upgradeAttackPower?: IntFilter<"tower"> | number
  }, "id">

  export type towerOrderByWithAggregationInput = {
    id?: SortOrder
    towerName?: SortOrder
    attackPower?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    attackType?: SortOrder
    towerPrice?: SortOrder
    upgradeAttackPower?: SortOrder
    _count?: towerCountOrderByAggregateInput
    _avg?: towerAvgOrderByAggregateInput
    _max?: towerMaxOrderByAggregateInput
    _min?: towerMinOrderByAggregateInput
    _sum?: towerSumOrderByAggregateInput
  }

  export type towerScalarWhereWithAggregatesInput = {
    AND?: towerScalarWhereWithAggregatesInput | towerScalarWhereWithAggregatesInput[]
    OR?: towerScalarWhereWithAggregatesInput[]
    NOT?: towerScalarWhereWithAggregatesInput | towerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tower"> | number
    towerName?: StringWithAggregatesFilter<"tower"> | string
    attackPower?: IntWithAggregatesFilter<"tower"> | number
    attackSpeed?: IntWithAggregatesFilter<"tower"> | number
    attackRange?: IntWithAggregatesFilter<"tower"> | number
    attackType?: EnumattackTypeWithAggregatesFilter<"tower"> | $Enums.attackType
    towerPrice?: IntWithAggregatesFilter<"tower"> | number
    upgradeAttackPower?: IntWithAggregatesFilter<"tower"> | number
  }

  export type initGameCreateInput = {
    baseHp: number
    startGold: number
    serverHighScore: number
  }

  export type initGameUncheckedCreateInput = {
    id?: number
    baseHp: number
    startGold: number
    serverHighScore: number
  }

  export type initGameUpdateInput = {
    baseHp?: IntFieldUpdateOperationsInput | number
    startGold?: IntFieldUpdateOperationsInput | number
    serverHighScore?: IntFieldUpdateOperationsInput | number
  }

  export type initGameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    baseHp?: IntFieldUpdateOperationsInput | number
    startGold?: IntFieldUpdateOperationsInput | number
    serverHighScore?: IntFieldUpdateOperationsInput | number
  }

  export type initGameCreateManyInput = {
    id?: number
    baseHp: number
    startGold: number
    serverHighScore: number
  }

  export type initGameUpdateManyMutationInput = {
    baseHp?: IntFieldUpdateOperationsInput | number
    startGold?: IntFieldUpdateOperationsInput | number
    serverHighScore?: IntFieldUpdateOperationsInput | number
  }

  export type initGameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    baseHp?: IntFieldUpdateOperationsInput | number
    startGold?: IntFieldUpdateOperationsInput | number
    serverHighScore?: IntFieldUpdateOperationsInput | number
  }

  export type monsterCreateInput = {
    hp: number
    atk: number
    speed: number
    score: number
    gold: number
    stage: number
    grade: number
  }

  export type monsterUncheckedCreateInput = {
    id?: number
    hp: number
    atk: number
    speed: number
    score: number
    gold: number
    stage: number
    grade: number
  }

  export type monsterUpdateInput = {
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    stage?: IntFieldUpdateOperationsInput | number
    grade?: IntFieldUpdateOperationsInput | number
  }

  export type monsterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    stage?: IntFieldUpdateOperationsInput | number
    grade?: IntFieldUpdateOperationsInput | number
  }

  export type monsterCreateManyInput = {
    id?: number
    hp: number
    atk: number
    speed: number
    score: number
    gold: number
    stage: number
    grade: number
  }

  export type monsterUpdateManyMutationInput = {
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    stage?: IntFieldUpdateOperationsInput | number
    grade?: IntFieldUpdateOperationsInput | number
  }

  export type monsterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    stage?: IntFieldUpdateOperationsInput | number
    grade?: IntFieldUpdateOperationsInput | number
  }

  export type towerCreateInput = {
    towerName: string
    attackPower: number
    attackSpeed: number
    attackRange: number
    attackType: $Enums.attackType
    towerPrice: number
    upgradeAttackPower: number
  }

  export type towerUncheckedCreateInput = {
    id?: number
    towerName: string
    attackPower: number
    attackSpeed: number
    attackRange: number
    attackType: $Enums.attackType
    towerPrice: number
    upgradeAttackPower: number
  }

  export type towerUpdateInput = {
    towerName?: StringFieldUpdateOperationsInput | string
    attackPower?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    attackType?: EnumattackTypeFieldUpdateOperationsInput | $Enums.attackType
    towerPrice?: IntFieldUpdateOperationsInput | number
    upgradeAttackPower?: IntFieldUpdateOperationsInput | number
  }

  export type towerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    towerName?: StringFieldUpdateOperationsInput | string
    attackPower?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    attackType?: EnumattackTypeFieldUpdateOperationsInput | $Enums.attackType
    towerPrice?: IntFieldUpdateOperationsInput | number
    upgradeAttackPower?: IntFieldUpdateOperationsInput | number
  }

  export type towerCreateManyInput = {
    id?: number
    towerName: string
    attackPower: number
    attackSpeed: number
    attackRange: number
    attackType: $Enums.attackType
    towerPrice: number
    upgradeAttackPower: number
  }

  export type towerUpdateManyMutationInput = {
    towerName?: StringFieldUpdateOperationsInput | string
    attackPower?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    attackType?: EnumattackTypeFieldUpdateOperationsInput | $Enums.attackType
    towerPrice?: IntFieldUpdateOperationsInput | number
    upgradeAttackPower?: IntFieldUpdateOperationsInput | number
  }

  export type towerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    towerName?: StringFieldUpdateOperationsInput | string
    attackPower?: IntFieldUpdateOperationsInput | number
    attackSpeed?: IntFieldUpdateOperationsInput | number
    attackRange?: IntFieldUpdateOperationsInput | number
    attackType?: EnumattackTypeFieldUpdateOperationsInput | $Enums.attackType
    towerPrice?: IntFieldUpdateOperationsInput | number
    upgradeAttackPower?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type initGameCountOrderByAggregateInput = {
    id?: SortOrder
    baseHp?: SortOrder
    startGold?: SortOrder
    serverHighScore?: SortOrder
  }

  export type initGameAvgOrderByAggregateInput = {
    id?: SortOrder
    baseHp?: SortOrder
    startGold?: SortOrder
    serverHighScore?: SortOrder
  }

  export type initGameMaxOrderByAggregateInput = {
    id?: SortOrder
    baseHp?: SortOrder
    startGold?: SortOrder
    serverHighScore?: SortOrder
  }

  export type initGameMinOrderByAggregateInput = {
    id?: SortOrder
    baseHp?: SortOrder
    startGold?: SortOrder
    serverHighScore?: SortOrder
  }

  export type initGameSumOrderByAggregateInput = {
    id?: SortOrder
    baseHp?: SortOrder
    startGold?: SortOrder
    serverHighScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type monsterCountOrderByAggregateInput = {
    id?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    speed?: SortOrder
    score?: SortOrder
    gold?: SortOrder
    stage?: SortOrder
    grade?: SortOrder
  }

  export type monsterAvgOrderByAggregateInput = {
    id?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    speed?: SortOrder
    score?: SortOrder
    gold?: SortOrder
    stage?: SortOrder
    grade?: SortOrder
  }

  export type monsterMaxOrderByAggregateInput = {
    id?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    speed?: SortOrder
    score?: SortOrder
    gold?: SortOrder
    stage?: SortOrder
    grade?: SortOrder
  }

  export type monsterMinOrderByAggregateInput = {
    id?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    speed?: SortOrder
    score?: SortOrder
    gold?: SortOrder
    stage?: SortOrder
    grade?: SortOrder
  }

  export type monsterSumOrderByAggregateInput = {
    id?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    speed?: SortOrder
    score?: SortOrder
    gold?: SortOrder
    stage?: SortOrder
    grade?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumattackTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.attackType | EnumattackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attackType[]
    notIn?: $Enums.attackType[]
    not?: NestedEnumattackTypeFilter<$PrismaModel> | $Enums.attackType
  }

  export type towerCountOrderByAggregateInput = {
    id?: SortOrder
    towerName?: SortOrder
    attackPower?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    attackType?: SortOrder
    towerPrice?: SortOrder
    upgradeAttackPower?: SortOrder
  }

  export type towerAvgOrderByAggregateInput = {
    id?: SortOrder
    attackPower?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    towerPrice?: SortOrder
    upgradeAttackPower?: SortOrder
  }

  export type towerMaxOrderByAggregateInput = {
    id?: SortOrder
    towerName?: SortOrder
    attackPower?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    attackType?: SortOrder
    towerPrice?: SortOrder
    upgradeAttackPower?: SortOrder
  }

  export type towerMinOrderByAggregateInput = {
    id?: SortOrder
    towerName?: SortOrder
    attackPower?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    attackType?: SortOrder
    towerPrice?: SortOrder
    upgradeAttackPower?: SortOrder
  }

  export type towerSumOrderByAggregateInput = {
    id?: SortOrder
    attackPower?: SortOrder
    attackSpeed?: SortOrder
    attackRange?: SortOrder
    towerPrice?: SortOrder
    upgradeAttackPower?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumattackTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attackType | EnumattackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attackType[]
    notIn?: $Enums.attackType[]
    not?: NestedEnumattackTypeWithAggregatesFilter<$PrismaModel> | $Enums.attackType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumattackTypeFilter<$PrismaModel>
    _max?: NestedEnumattackTypeFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumattackTypeFieldUpdateOperationsInput = {
    set?: $Enums.attackType
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumattackTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.attackType | EnumattackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attackType[]
    notIn?: $Enums.attackType[]
    not?: NestedEnumattackTypeFilter<$PrismaModel> | $Enums.attackType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumattackTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attackType | EnumattackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attackType[]
    notIn?: $Enums.attackType[]
    not?: NestedEnumattackTypeWithAggregatesFilter<$PrismaModel> | $Enums.attackType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumattackTypeFilter<$PrismaModel>
    _max?: NestedEnumattackTypeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use initGameDefaultArgs instead
     */
    export type initGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = initGameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use monsterDefaultArgs instead
     */
    export type monsterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = monsterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use towerDefaultArgs instead
     */
    export type towerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = towerDefaultArgs<ExtArgs>

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