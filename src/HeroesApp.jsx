import { AuthProvides } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvides>
     <AppRouter/>
    </AuthProvides>
  );
};
