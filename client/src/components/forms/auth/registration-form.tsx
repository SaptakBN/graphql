import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterDocument, RegisterMutation, RegisterMutationVariables } from "@/GraphQL/generated/graphql";
import { RegistrationFormData, registrationValidator } from "@/validators";

export const RegistrationForm = () => {
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationValidator),
  });

  const [register, { data, loading, error }] = useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );

  const handleRegister = async (value: RegistrationFormData) => {
    const { confirmPassword, ...rest } = value;
    if (confirmPassword !== rest.password) return;

    const response = await register({
      variables: {
        registerArg: rest,
      },
    });

    console.log({ response, rest, data, loading, error });
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="name" placeholder="name" {...registerInput("name")} />
        {errors.name && touchedFields.name && <p>{errors.name.message}</p>}
        <input type="text" placeholder="Username" {...registerInput("username")} />
        {errors.username && touchedFields.username && <p>{errors.username.message}</p>}
        <input type="password" placeholder="Password" {...registerInput("password")} />
        {errors.password && touchedFields.password && <p>{errors.password.message}</p>}
        <input type="password" placeholder="Confirm Password" {...registerInput("confirmPassword")} />
        {errors.confirmPassword && touchedFields.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button>Sign up</button>
      </form>
    </div>
  );
};
