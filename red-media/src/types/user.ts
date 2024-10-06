// Example type for User related types

export type UserType = {
    id: number;
    name: string;
    userStatus: UserStatusType;
};

export type OtherUserRelatedType = {};

export type UserStatusType = 'active' | 'inactive' | 'pending' | 'suspended';