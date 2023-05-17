export interface IUser {
	id: string | number;
	tag: string;

}

export interface IAuthUser extends IUser{
	token: string;

}