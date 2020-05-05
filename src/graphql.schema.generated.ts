
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum WorkBreakdownStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    HALF_DONE = "HALF_DONE",
    COMPLETE = "COMPLETE"
}

export enum WorkOrderStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    HALF_DONE = "HALF_DONE",
    COMPLETE = "COMPLETE"
}

export class ClientInput {
    name: string;
    contact?: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class SignUpInput {
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
}

export class UserProfileInput {
    firstName: string;
    lastName?: string;
    dob?: string;
    email: string;
}

export class WorkBreakdownInput {
    workOrderId: string;
    sideA?: string;
    sideB?: string;
    quantity?: number;
    side?: number;
    rate?: number;
}

export class WorkOrderInput {
    item: string;
    workTypeIds: string[];
    workerId?: string;
    clientId: string;
}

export class WorkTypeInput {
    name: string;
    rate: number;
}

export class AuthPayload {
    id: string;
    email: string;
}

export class Client {
    id: string;
    name: string;
    contact?: string;
    workOrders: WorkOrder[];
    createdAt: string;
    updatedAt: string;
}

export abstract class IMutation {
    abstract signUp(signUpInput?: SignUpInput): AuthPayload | Promise<AuthPayload>;

    abstract login(loginInput?: LoginInput): AuthPayload | Promise<AuthPayload>;

    abstract logout(): boolean | Promise<boolean>;

    abstract createClient(input?: ClientInput): Client | Promise<Client>;

    abstract updateClient(id: string, input?: ClientInput): Client | Promise<Client>;

    abstract deleteClient(id: string): Client | Promise<Client>;

    abstract updateUserProfile(): User | Promise<User>;

    abstract createWorkBreakdown(input?: WorkBreakdownInput): WorkBreakdown | Promise<WorkBreakdown>;

    abstract updateWorkBreakdown(id: string, input?: WorkBreakdownInput): WorkBreakdown | Promise<WorkBreakdown>;

    abstract deleteWorkBreakdown(id: string): WorkBreakdown | Promise<WorkBreakdown>;

    abstract createWorkOrder(input?: WorkOrderInput): WorkOrder | Promise<WorkOrder>;

    abstract updateWorkOrder(id: string, input?: WorkOrderInput): WorkOrder | Promise<WorkOrder>;

    abstract deleteWorkOrder(id: string): WorkOrder | Promise<WorkOrder>;

    abstract createWorkType(input?: WorkTypeInput): WorkType | Promise<WorkType>;

    abstract updateWorkType(id: string, input?: WorkTypeInput): WorkType | Promise<WorkType>;

    abstract deleteWorkType(id: string): WorkType | Promise<WorkType>;
}

export abstract class IQuery {
    abstract currentUser(): AuthPayload | Promise<AuthPayload>;

    abstract getClients(): Client[] | Promise<Client[]>;

    abstract getClientById(): Client | Promise<Client>;

    abstract users(): User[] | Promise<User[]>;

    abstract getWorkBreakdowns(): WorkBreakdown[] | Promise<WorkBreakdown[]>;

    abstract getWorkBreakdownById(): WorkBreakdown | Promise<WorkBreakdown>;

    abstract getWorkOrders(): WorkOrder[] | Promise<WorkOrder[]>;

    abstract getWorkOrderById(): WorkOrder | Promise<WorkOrder>;

    abstract getWorkTypes(): WorkType[] | Promise<WorkType[]>;

    abstract getWorkTypeById(): WorkType | Promise<WorkType>;
}

export class User {
    id: string;
    firstName: string;
    lastName?: string;
    dob?: string;
    email: string;
    password: string;
    role?: Role;
    createdAt: string;
    updatedAt: string;
}

export class WorkBreakdown {
    id: string;
    workOrder: WorkOrder;
    sideA?: string;
    sideB?: string;
    quantity?: number;
    side?: number;
    rate?: number;
    status: WorkBreakdownStatus;
}

export class WorkOrder {
    id: string;
    item: string;
    workTypes: WorkType[];
    worker?: User;
    client: Client;
    status: WorkOrderStatus;
    createdAt: string;
    updatedAt: string;
}

export class WorkType {
    id: string;
    name: string;
    rate: number;
    workOrders: WorkOrder[];
    createdAt: string;
    updatedAt: string;
}
