import { useAuth } from "../../Hook/useAuth";

type Props = {
  children: JSX.Element;
};

/**Ограничение прав контроля */
export const RequireRight = ({ children }: Props) => {
  const { user } = useAuth();

  if (user.RoleId === 5) return null;

  return children;
};
