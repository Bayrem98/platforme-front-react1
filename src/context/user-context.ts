import { createContext } from "react";
import User from "../@Types/User";

const user = {
  username: "formatrice",
} as User;

export interface UserContextType {
  user?: User;
  isLoading: boolean;
}

export const UserContextDefaultValue: UserContextType = {
  user: user,
  isLoading: false,
};

export const UserContext = createContext<UserContextType>(
  UserContextDefaultValue
);
