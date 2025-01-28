import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginValidator } from "@/validators/login.validator";
import { LoginDocument, LoginMutation, LoginMutationVariables } from "@/GraphQL/generated/graphql";

export const LoginForm = () => {
  const [login, { data, loading, error }] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidator),
  });

  async function handleLogin(value: LoginFormData) {
    const response = await login({
      variables: {
        loginArg: value,
      },
    });
    console.log({ response, data, loading, error });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit(handleLogin)}>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input type="text" placeholder="Username" {...registerInput("username")} />
        {errors.username && touchedFields.username && <p>{errors.username.message}</p>}
        <input type="password" placeholder="Password" {...registerInput("password")} />
        {errors.password && touchedFields.password && <p>{errors.password.message}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};
