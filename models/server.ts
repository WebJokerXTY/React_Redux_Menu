export interface IMenuStation {
    uuid?: string;
    name?: string;
    administrator?: boolean;
    order?: number;
    activity?: boolean;
}

export interface IMenuDepartment {
    uuid?: string;
    name?: string;
    stations?: IMenuStation[];
    order?: number;
    activity?: boolean;
}

export interface IMenu {
    departments?: IMenuDepartment[];
    administrator?: boolean;
}