export type CreateUserProps = {
  username: string, 
  usernameConfirm: string, 
  password: string, 
  passwordConfirm: string
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
