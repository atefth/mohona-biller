
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
    email: string;
    password: string;
}

export class UserInput {
    email: string;
}

export class WorkOrderInput {
    item: string;
    workTypes: WorkTypeInput[];
    worker?: UserInput;
    client: ClientInput;
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
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract currentUser(): AuthPayload | Promise<AuthPayload>;
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
}

export class WorkOrder {
    id: string;
    item: string;
    workTypes: WorkType[];
    worker?: User;
    client: Client;
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
