// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateClient {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWorkBreakdown {
  count: Int!
}

type AggregateWorkOrder {
  count: Int!
}

type AggregateWorkType {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Client {
  id: ID!
  name: String!
  contact: String
  workOrders(where: WorkOrderWhereInput, orderBy: WorkOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkOrder!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ClientConnection {
  pageInfo: PageInfo!
  edges: [ClientEdge]!
  aggregate: AggregateClient!
}

input ClientCreateInput {
  id: ID
  name: String!
  contact: String
  workOrders: WorkOrderCreateManyWithoutClientInput
}

input ClientCreateOneWithoutWorkOrdersInput {
  create: ClientCreateWithoutWorkOrdersInput
  connect: ClientWhereUniqueInput
}

input ClientCreateWithoutWorkOrdersInput {
  id: ID
  name: String!
  contact: String
}

type ClientEdge {
  node: Client!
  cursor: String!
}

enum ClientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  contact_ASC
  contact_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClientPreviousValues {
  id: ID!
  name: String!
  contact: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ClientSubscriptionPayload {
  mutation: MutationType!
  node: Client
  updatedFields: [String!]
  previousValues: ClientPreviousValues
}

input ClientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClientWhereInput
  AND: [ClientSubscriptionWhereInput!]
  OR: [ClientSubscriptionWhereInput!]
  NOT: [ClientSubscriptionWhereInput!]
}

input ClientUpdateInput {
  name: String
  contact: String
  workOrders: WorkOrderUpdateManyWithoutClientInput
}

input ClientUpdateManyMutationInput {
  name: String
  contact: String
}

input ClientUpdateOneRequiredWithoutWorkOrdersInput {
  create: ClientCreateWithoutWorkOrdersInput
  update: ClientUpdateWithoutWorkOrdersDataInput
  upsert: ClientUpsertWithoutWorkOrdersInput
  connect: ClientWhereUniqueInput
}

input ClientUpdateWithoutWorkOrdersDataInput {
  name: String
  contact: String
}

input ClientUpsertWithoutWorkOrdersInput {
  update: ClientUpdateWithoutWorkOrdersDataInput!
  create: ClientCreateWithoutWorkOrdersInput!
}

input ClientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  contact: String
  contact_not: String
  contact_in: [String!]
  contact_not_in: [String!]
  contact_lt: String
  contact_lte: String
  contact_gt: String
  contact_gte: String
  contact_contains: String
  contact_not_contains: String
  contact_starts_with: String
  contact_not_starts_with: String
  contact_ends_with: String
  contact_not_ends_with: String
  workOrders_every: WorkOrderWhereInput
  workOrders_some: WorkOrderWhereInput
  workOrders_none: WorkOrderWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ClientWhereInput!]
  OR: [ClientWhereInput!]
  NOT: [ClientWhereInput!]
}

input ClientWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

scalar Long

type Mutation {
  createClient(data: ClientCreateInput!): Client!
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateManyClients(data: ClientUpdateManyMutationInput!, where: ClientWhereInput): BatchPayload!
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWorkBreakdown(data: WorkBreakdownCreateInput!): WorkBreakdown!
  updateWorkBreakdown(data: WorkBreakdownUpdateInput!, where: WorkBreakdownWhereUniqueInput!): WorkBreakdown
  updateManyWorkBreakdowns(data: WorkBreakdownUpdateManyMutationInput!, where: WorkBreakdownWhereInput): BatchPayload!
  upsertWorkBreakdown(where: WorkBreakdownWhereUniqueInput!, create: WorkBreakdownCreateInput!, update: WorkBreakdownUpdateInput!): WorkBreakdown!
  deleteWorkBreakdown(where: WorkBreakdownWhereUniqueInput!): WorkBreakdown
  deleteManyWorkBreakdowns(where: WorkBreakdownWhereInput): BatchPayload!
  createWorkOrder(data: WorkOrderCreateInput!): WorkOrder!
  updateWorkOrder(data: WorkOrderUpdateInput!, where: WorkOrderWhereUniqueInput!): WorkOrder
  updateManyWorkOrders(data: WorkOrderUpdateManyMutationInput!, where: WorkOrderWhereInput): BatchPayload!
  upsertWorkOrder(where: WorkOrderWhereUniqueInput!, create: WorkOrderCreateInput!, update: WorkOrderUpdateInput!): WorkOrder!
  deleteWorkOrder(where: WorkOrderWhereUniqueInput!): WorkOrder
  deleteManyWorkOrders(where: WorkOrderWhereInput): BatchPayload!
  createWorkType(data: WorkTypeCreateInput!): WorkType!
  updateWorkType(data: WorkTypeUpdateInput!, where: WorkTypeWhereUniqueInput!): WorkType
  updateManyWorkTypes(data: WorkTypeUpdateManyMutationInput!, where: WorkTypeWhereInput): BatchPayload!
  upsertWorkType(where: WorkTypeWhereUniqueInput!, create: WorkTypeCreateInput!, update: WorkTypeUpdateInput!): WorkType!
  deleteWorkType(where: WorkTypeWhereUniqueInput!): WorkType
  deleteManyWorkTypes(where: WorkTypeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  client(where: ClientWhereUniqueInput!): Client
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client]!
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  workBreakdown(where: WorkBreakdownWhereUniqueInput!): WorkBreakdown
  workBreakdowns(where: WorkBreakdownWhereInput, orderBy: WorkBreakdownOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkBreakdown]!
  workBreakdownsConnection(where: WorkBreakdownWhereInput, orderBy: WorkBreakdownOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkBreakdownConnection!
  workOrder(where: WorkOrderWhereUniqueInput!): WorkOrder
  workOrders(where: WorkOrderWhereInput, orderBy: WorkOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkOrder]!
  workOrdersConnection(where: WorkOrderWhereInput, orderBy: WorkOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkOrderConnection!
  workType(where: WorkTypeWhereUniqueInput!): WorkType
  workTypes(where: WorkTypeWhereInput, orderBy: WorkTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkType]!
  workTypesConnection(where: WorkTypeWhereInput, orderBy: WorkTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkTypeConnection!
  node(id: ID!): Node
}

enum Role {
  USER
  ADMIN
}

type Subscription {
  client(where: ClientSubscriptionWhereInput): ClientSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  workBreakdown(where: WorkBreakdownSubscriptionWhereInput): WorkBreakdownSubscriptionPayload
  workOrder(where: WorkOrderSubscriptionWhereInput): WorkOrderSubscriptionPayload
  workType(where: WorkTypeSubscriptionWhereInput): WorkTypeSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String
  dob: DateTime
  email: String!
  password: String!
  role: Role
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String!
  lastName: String
  dob: DateTime
  email: String!
  password: String!
  role: Role
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  dob_ASC
  dob_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String
  dob: DateTime
  email: String!
  password: String!
  role: Role
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  dob: DateTime
  email: String
  password: String
  role: Role
}

input UserUpdateInput {
  firstName: String
  lastName: String
  dob: DateTime
  email: String
  password: String
  role: Role
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  dob: DateTime
  email: String
  password: String
  role: Role
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  dob: DateTime
  dob_not: DateTime
  dob_in: [DateTime!]
  dob_not_in: [DateTime!]
  dob_lt: DateTime
  dob_lte: DateTime
  dob_gt: DateTime
  dob_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type WorkBreakdown {
  id: ID!
  workOrder: WorkOrder!
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WorkBreakdownConnection {
  pageInfo: PageInfo!
  edges: [WorkBreakdownEdge]!
  aggregate: AggregateWorkBreakdown!
}

input WorkBreakdownCreateInput {
  id: ID
  workOrder: WorkOrderCreateOneWithoutWorkBreakdownsInput!
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus
}

input WorkBreakdownCreateManyWithoutWorkOrderInput {
  create: [WorkBreakdownCreateWithoutWorkOrderInput!]
  connect: [WorkBreakdownWhereUniqueInput!]
}

input WorkBreakdownCreateWithoutWorkOrderInput {
  id: ID
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus
}

type WorkBreakdownEdge {
  node: WorkBreakdown!
  cursor: String!
}

enum WorkBreakdownOrderByInput {
  id_ASC
  id_DESC
  sideA_ASC
  sideA_DESC
  sideB_ASC
  sideB_DESC
  quantity_ASC
  quantity_DESC
  ups_ASC
  ups_DESC
  side_ASC
  side_DESC
  rate_ASC
  rate_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkBreakdownPreviousValues {
  id: ID!
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input WorkBreakdownScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sideA: String
  sideA_not: String
  sideA_in: [String!]
  sideA_not_in: [String!]
  sideA_lt: String
  sideA_lte: String
  sideA_gt: String
  sideA_gte: String
  sideA_contains: String
  sideA_not_contains: String
  sideA_starts_with: String
  sideA_not_starts_with: String
  sideA_ends_with: String
  sideA_not_ends_with: String
  sideB: String
  sideB_not: String
  sideB_in: [String!]
  sideB_not_in: [String!]
  sideB_lt: String
  sideB_lte: String
  sideB_gt: String
  sideB_gte: String
  sideB_contains: String
  sideB_not_contains: String
  sideB_starts_with: String
  sideB_not_starts_with: String
  sideB_ends_with: String
  sideB_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  ups: Int
  ups_not: Int
  ups_in: [Int!]
  ups_not_in: [Int!]
  ups_lt: Int
  ups_lte: Int
  ups_gt: Int
  ups_gte: Int
  side: Int
  side_not: Int
  side_in: [Int!]
  side_not_in: [Int!]
  side_lt: Int
  side_lte: Int
  side_gt: Int
  side_gte: Int
  rate: Float
  rate_not: Float
  rate_in: [Float!]
  rate_not_in: [Float!]
  rate_lt: Float
  rate_lte: Float
  rate_gt: Float
  rate_gte: Float
  status: WorkBreakdownStatus
  status_not: WorkBreakdownStatus
  status_in: [WorkBreakdownStatus!]
  status_not_in: [WorkBreakdownStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WorkBreakdownScalarWhereInput!]
  OR: [WorkBreakdownScalarWhereInput!]
  NOT: [WorkBreakdownScalarWhereInput!]
}

enum WorkBreakdownStatus {
  PENDING
  IN_PROGRESS
  HALF_DONE
  COMPLETE
}

type WorkBreakdownSubscriptionPayload {
  mutation: MutationType!
  node: WorkBreakdown
  updatedFields: [String!]
  previousValues: WorkBreakdownPreviousValues
}

input WorkBreakdownSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkBreakdownWhereInput
  AND: [WorkBreakdownSubscriptionWhereInput!]
  OR: [WorkBreakdownSubscriptionWhereInput!]
  NOT: [WorkBreakdownSubscriptionWhereInput!]
}

input WorkBreakdownUpdateInput {
  workOrder: WorkOrderUpdateOneRequiredWithoutWorkBreakdownsInput
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus
}

input WorkBreakdownUpdateManyDataInput {
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus
}

input WorkBreakdownUpdateManyMutationInput {
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus
}

input WorkBreakdownUpdateManyWithoutWorkOrderInput {
  create: [WorkBreakdownCreateWithoutWorkOrderInput!]
  delete: [WorkBreakdownWhereUniqueInput!]
  connect: [WorkBreakdownWhereUniqueInput!]
  set: [WorkBreakdownWhereUniqueInput!]
  disconnect: [WorkBreakdownWhereUniqueInput!]
  update: [WorkBreakdownUpdateWithWhereUniqueWithoutWorkOrderInput!]
  upsert: [WorkBreakdownUpsertWithWhereUniqueWithoutWorkOrderInput!]
  deleteMany: [WorkBreakdownScalarWhereInput!]
  updateMany: [WorkBreakdownUpdateManyWithWhereNestedInput!]
}

input WorkBreakdownUpdateManyWithWhereNestedInput {
  where: WorkBreakdownScalarWhereInput!
  data: WorkBreakdownUpdateManyDataInput!
}

input WorkBreakdownUpdateWithoutWorkOrderDataInput {
  sideA: String
  sideB: String
  quantity: Int
  ups: Int
  side: Int
  rate: Float
  status: WorkBreakdownStatus
}

input WorkBreakdownUpdateWithWhereUniqueWithoutWorkOrderInput {
  where: WorkBreakdownWhereUniqueInput!
  data: WorkBreakdownUpdateWithoutWorkOrderDataInput!
}

input WorkBreakdownUpsertWithWhereUniqueWithoutWorkOrderInput {
  where: WorkBreakdownWhereUniqueInput!
  update: WorkBreakdownUpdateWithoutWorkOrderDataInput!
  create: WorkBreakdownCreateWithoutWorkOrderInput!
}

input WorkBreakdownWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  workOrder: WorkOrderWhereInput
  sideA: String
  sideA_not: String
  sideA_in: [String!]
  sideA_not_in: [String!]
  sideA_lt: String
  sideA_lte: String
  sideA_gt: String
  sideA_gte: String
  sideA_contains: String
  sideA_not_contains: String
  sideA_starts_with: String
  sideA_not_starts_with: String
  sideA_ends_with: String
  sideA_not_ends_with: String
  sideB: String
  sideB_not: String
  sideB_in: [String!]
  sideB_not_in: [String!]
  sideB_lt: String
  sideB_lte: String
  sideB_gt: String
  sideB_gte: String
  sideB_contains: String
  sideB_not_contains: String
  sideB_starts_with: String
  sideB_not_starts_with: String
  sideB_ends_with: String
  sideB_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  ups: Int
  ups_not: Int
  ups_in: [Int!]
  ups_not_in: [Int!]
  ups_lt: Int
  ups_lte: Int
  ups_gt: Int
  ups_gte: Int
  side: Int
  side_not: Int
  side_in: [Int!]
  side_not_in: [Int!]
  side_lt: Int
  side_lte: Int
  side_gt: Int
  side_gte: Int
  rate: Float
  rate_not: Float
  rate_in: [Float!]
  rate_not_in: [Float!]
  rate_lt: Float
  rate_lte: Float
  rate_gt: Float
  rate_gte: Float
  status: WorkBreakdownStatus
  status_not: WorkBreakdownStatus
  status_in: [WorkBreakdownStatus!]
  status_not_in: [WorkBreakdownStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WorkBreakdownWhereInput!]
  OR: [WorkBreakdownWhereInput!]
  NOT: [WorkBreakdownWhereInput!]
}

input WorkBreakdownWhereUniqueInput {
  id: ID
}

type WorkOrder {
  id: ID!
  item: String!
  workTypes(where: WorkTypeWhereInput, orderBy: WorkTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkType!]
  workBreakdowns(where: WorkBreakdownWhereInput, orderBy: WorkBreakdownOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkBreakdown!]
  worker: User
  client: Client!
  status: WorkOrderStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WorkOrderConnection {
  pageInfo: PageInfo!
  edges: [WorkOrderEdge]!
  aggregate: AggregateWorkOrder!
}

input WorkOrderCreateInput {
  id: ID
  item: String!
  workTypes: WorkTypeCreateManyWithoutWorkOrdersInput
  workBreakdowns: WorkBreakdownCreateManyWithoutWorkOrderInput
  worker: UserCreateOneInput
  client: ClientCreateOneWithoutWorkOrdersInput!
  status: WorkOrderStatus
}

input WorkOrderCreateManyWithoutClientInput {
  create: [WorkOrderCreateWithoutClientInput!]
  connect: [WorkOrderWhereUniqueInput!]
}

input WorkOrderCreateManyWithoutWorkTypesInput {
  create: [WorkOrderCreateWithoutWorkTypesInput!]
  connect: [WorkOrderWhereUniqueInput!]
}

input WorkOrderCreateOneWithoutWorkBreakdownsInput {
  create: WorkOrderCreateWithoutWorkBreakdownsInput
  connect: WorkOrderWhereUniqueInput
}

input WorkOrderCreateWithoutClientInput {
  id: ID
  item: String!
  workTypes: WorkTypeCreateManyWithoutWorkOrdersInput
  workBreakdowns: WorkBreakdownCreateManyWithoutWorkOrderInput
  worker: UserCreateOneInput
  status: WorkOrderStatus
}

input WorkOrderCreateWithoutWorkBreakdownsInput {
  id: ID
  item: String!
  workTypes: WorkTypeCreateManyWithoutWorkOrdersInput
  worker: UserCreateOneInput
  client: ClientCreateOneWithoutWorkOrdersInput!
  status: WorkOrderStatus
}

input WorkOrderCreateWithoutWorkTypesInput {
  id: ID
  item: String!
  workBreakdowns: WorkBreakdownCreateManyWithoutWorkOrderInput
  worker: UserCreateOneInput
  client: ClientCreateOneWithoutWorkOrdersInput!
  status: WorkOrderStatus
}

type WorkOrderEdge {
  node: WorkOrder!
  cursor: String!
}

enum WorkOrderOrderByInput {
  id_ASC
  id_DESC
  item_ASC
  item_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkOrderPreviousValues {
  id: ID!
  item: String!
  status: WorkOrderStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input WorkOrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  item: String
  item_not: String
  item_in: [String!]
  item_not_in: [String!]
  item_lt: String
  item_lte: String
  item_gt: String
  item_gte: String
  item_contains: String
  item_not_contains: String
  item_starts_with: String
  item_not_starts_with: String
  item_ends_with: String
  item_not_ends_with: String
  status: WorkOrderStatus
  status_not: WorkOrderStatus
  status_in: [WorkOrderStatus!]
  status_not_in: [WorkOrderStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WorkOrderScalarWhereInput!]
  OR: [WorkOrderScalarWhereInput!]
  NOT: [WorkOrderScalarWhereInput!]
}

enum WorkOrderStatus {
  PENDING
  IN_PROGRESS
  HALF_DONE
  COMPLETE
}

type WorkOrderSubscriptionPayload {
  mutation: MutationType!
  node: WorkOrder
  updatedFields: [String!]
  previousValues: WorkOrderPreviousValues
}

input WorkOrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkOrderWhereInput
  AND: [WorkOrderSubscriptionWhereInput!]
  OR: [WorkOrderSubscriptionWhereInput!]
  NOT: [WorkOrderSubscriptionWhereInput!]
}

input WorkOrderUpdateInput {
  item: String
  workTypes: WorkTypeUpdateManyWithoutWorkOrdersInput
  workBreakdowns: WorkBreakdownUpdateManyWithoutWorkOrderInput
  worker: UserUpdateOneInput
  client: ClientUpdateOneRequiredWithoutWorkOrdersInput
  status: WorkOrderStatus
}

input WorkOrderUpdateManyDataInput {
  item: String
  status: WorkOrderStatus
}

input WorkOrderUpdateManyMutationInput {
  item: String
  status: WorkOrderStatus
}

input WorkOrderUpdateManyWithoutClientInput {
  create: [WorkOrderCreateWithoutClientInput!]
  delete: [WorkOrderWhereUniqueInput!]
  connect: [WorkOrderWhereUniqueInput!]
  set: [WorkOrderWhereUniqueInput!]
  disconnect: [WorkOrderWhereUniqueInput!]
  update: [WorkOrderUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [WorkOrderUpsertWithWhereUniqueWithoutClientInput!]
  deleteMany: [WorkOrderScalarWhereInput!]
  updateMany: [WorkOrderUpdateManyWithWhereNestedInput!]
}

input WorkOrderUpdateManyWithoutWorkTypesInput {
  create: [WorkOrderCreateWithoutWorkTypesInput!]
  delete: [WorkOrderWhereUniqueInput!]
  connect: [WorkOrderWhereUniqueInput!]
  set: [WorkOrderWhereUniqueInput!]
  disconnect: [WorkOrderWhereUniqueInput!]
  update: [WorkOrderUpdateWithWhereUniqueWithoutWorkTypesInput!]
  upsert: [WorkOrderUpsertWithWhereUniqueWithoutWorkTypesInput!]
  deleteMany: [WorkOrderScalarWhereInput!]
  updateMany: [WorkOrderUpdateManyWithWhereNestedInput!]
}

input WorkOrderUpdateManyWithWhereNestedInput {
  where: WorkOrderScalarWhereInput!
  data: WorkOrderUpdateManyDataInput!
}

input WorkOrderUpdateOneRequiredWithoutWorkBreakdownsInput {
  create: WorkOrderCreateWithoutWorkBreakdownsInput
  update: WorkOrderUpdateWithoutWorkBreakdownsDataInput
  upsert: WorkOrderUpsertWithoutWorkBreakdownsInput
  connect: WorkOrderWhereUniqueInput
}

input WorkOrderUpdateWithoutClientDataInput {
  item: String
  workTypes: WorkTypeUpdateManyWithoutWorkOrdersInput
  workBreakdowns: WorkBreakdownUpdateManyWithoutWorkOrderInput
  worker: UserUpdateOneInput
  status: WorkOrderStatus
}

input WorkOrderUpdateWithoutWorkBreakdownsDataInput {
  item: String
  workTypes: WorkTypeUpdateManyWithoutWorkOrdersInput
  worker: UserUpdateOneInput
  client: ClientUpdateOneRequiredWithoutWorkOrdersInput
  status: WorkOrderStatus
}

input WorkOrderUpdateWithoutWorkTypesDataInput {
  item: String
  workBreakdowns: WorkBreakdownUpdateManyWithoutWorkOrderInput
  worker: UserUpdateOneInput
  client: ClientUpdateOneRequiredWithoutWorkOrdersInput
  status: WorkOrderStatus
}

input WorkOrderUpdateWithWhereUniqueWithoutClientInput {
  where: WorkOrderWhereUniqueInput!
  data: WorkOrderUpdateWithoutClientDataInput!
}

input WorkOrderUpdateWithWhereUniqueWithoutWorkTypesInput {
  where: WorkOrderWhereUniqueInput!
  data: WorkOrderUpdateWithoutWorkTypesDataInput!
}

input WorkOrderUpsertWithoutWorkBreakdownsInput {
  update: WorkOrderUpdateWithoutWorkBreakdownsDataInput!
  create: WorkOrderCreateWithoutWorkBreakdownsInput!
}

input WorkOrderUpsertWithWhereUniqueWithoutClientInput {
  where: WorkOrderWhereUniqueInput!
  update: WorkOrderUpdateWithoutClientDataInput!
  create: WorkOrderCreateWithoutClientInput!
}

input WorkOrderUpsertWithWhereUniqueWithoutWorkTypesInput {
  where: WorkOrderWhereUniqueInput!
  update: WorkOrderUpdateWithoutWorkTypesDataInput!
  create: WorkOrderCreateWithoutWorkTypesInput!
}

input WorkOrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  item: String
  item_not: String
  item_in: [String!]
  item_not_in: [String!]
  item_lt: String
  item_lte: String
  item_gt: String
  item_gte: String
  item_contains: String
  item_not_contains: String
  item_starts_with: String
  item_not_starts_with: String
  item_ends_with: String
  item_not_ends_with: String
  workTypes_every: WorkTypeWhereInput
  workTypes_some: WorkTypeWhereInput
  workTypes_none: WorkTypeWhereInput
  workBreakdowns_every: WorkBreakdownWhereInput
  workBreakdowns_some: WorkBreakdownWhereInput
  workBreakdowns_none: WorkBreakdownWhereInput
  worker: UserWhereInput
  client: ClientWhereInput
  status: WorkOrderStatus
  status_not: WorkOrderStatus
  status_in: [WorkOrderStatus!]
  status_not_in: [WorkOrderStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WorkOrderWhereInput!]
  OR: [WorkOrderWhereInput!]
  NOT: [WorkOrderWhereInput!]
}

input WorkOrderWhereUniqueInput {
  id: ID
}

type WorkType {
  id: ID!
  name: String!
  rate: Float!
  workOrders(where: WorkOrderWhereInput, orderBy: WorkOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkOrder!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WorkTypeConnection {
  pageInfo: PageInfo!
  edges: [WorkTypeEdge]!
  aggregate: AggregateWorkType!
}

input WorkTypeCreateInput {
  id: ID
  name: String!
  rate: Float!
  workOrders: WorkOrderCreateManyWithoutWorkTypesInput
}

input WorkTypeCreateManyWithoutWorkOrdersInput {
  create: [WorkTypeCreateWithoutWorkOrdersInput!]
  connect: [WorkTypeWhereUniqueInput!]
}

input WorkTypeCreateWithoutWorkOrdersInput {
  id: ID
  name: String!
  rate: Float!
}

type WorkTypeEdge {
  node: WorkType!
  cursor: String!
}

enum WorkTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  rate_ASC
  rate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkTypePreviousValues {
  id: ID!
  name: String!
  rate: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input WorkTypeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rate: Float
  rate_not: Float
  rate_in: [Float!]
  rate_not_in: [Float!]
  rate_lt: Float
  rate_lte: Float
  rate_gt: Float
  rate_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WorkTypeScalarWhereInput!]
  OR: [WorkTypeScalarWhereInput!]
  NOT: [WorkTypeScalarWhereInput!]
}

type WorkTypeSubscriptionPayload {
  mutation: MutationType!
  node: WorkType
  updatedFields: [String!]
  previousValues: WorkTypePreviousValues
}

input WorkTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkTypeWhereInput
  AND: [WorkTypeSubscriptionWhereInput!]
  OR: [WorkTypeSubscriptionWhereInput!]
  NOT: [WorkTypeSubscriptionWhereInput!]
}

input WorkTypeUpdateInput {
  name: String
  rate: Float
  workOrders: WorkOrderUpdateManyWithoutWorkTypesInput
}

input WorkTypeUpdateManyDataInput {
  name: String
  rate: Float
}

input WorkTypeUpdateManyMutationInput {
  name: String
  rate: Float
}

input WorkTypeUpdateManyWithoutWorkOrdersInput {
  create: [WorkTypeCreateWithoutWorkOrdersInput!]
  delete: [WorkTypeWhereUniqueInput!]
  connect: [WorkTypeWhereUniqueInput!]
  set: [WorkTypeWhereUniqueInput!]
  disconnect: [WorkTypeWhereUniqueInput!]
  update: [WorkTypeUpdateWithWhereUniqueWithoutWorkOrdersInput!]
  upsert: [WorkTypeUpsertWithWhereUniqueWithoutWorkOrdersInput!]
  deleteMany: [WorkTypeScalarWhereInput!]
  updateMany: [WorkTypeUpdateManyWithWhereNestedInput!]
}

input WorkTypeUpdateManyWithWhereNestedInput {
  where: WorkTypeScalarWhereInput!
  data: WorkTypeUpdateManyDataInput!
}

input WorkTypeUpdateWithoutWorkOrdersDataInput {
  name: String
  rate: Float
}

input WorkTypeUpdateWithWhereUniqueWithoutWorkOrdersInput {
  where: WorkTypeWhereUniqueInput!
  data: WorkTypeUpdateWithoutWorkOrdersDataInput!
}

input WorkTypeUpsertWithWhereUniqueWithoutWorkOrdersInput {
  where: WorkTypeWhereUniqueInput!
  update: WorkTypeUpdateWithoutWorkOrdersDataInput!
  create: WorkTypeCreateWithoutWorkOrdersInput!
}

input WorkTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rate: Float
  rate_not: Float
  rate_in: [Float!]
  rate_not_in: [Float!]
  rate_lt: Float
  rate_lte: Float
  rate_gt: Float
  rate_gte: Float
  workOrders_every: WorkOrderWhereInput
  workOrders_some: WorkOrderWhereInput
  workOrders_none: WorkOrderWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WorkTypeWhereInput!]
  OR: [WorkTypeWhereInput!]
  NOT: [WorkTypeWhereInput!]
}

input WorkTypeWhereUniqueInput {
  id: ID
  name: String
}
`