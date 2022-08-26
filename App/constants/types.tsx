export type CreateUserProps = {
  username: string, 
  password: string, 
  password_confirmation: string
};

export type MainStackParamList = {
  Home: undefined;
  Options: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Login: undefined;
}

type CommonPages = "Home" | "Options" | "Login" ;

export type PageTitles = CommonPages | "Sign In" | "Sign Up"

export type PageRoutes = CommonPages | "SignIn" | "SignUp"
