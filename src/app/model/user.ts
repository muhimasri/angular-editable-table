export interface User {
    isSelected: boolean;
    id: number;
    name: string;
    email: string;
    phone: string;
    isEdit: boolean;
}

export const UserSchema = {
    isSelected: "isSelected",
    name: "text",
    email: "text",
    phone: "text",
    isEdit: "isEdit"
}