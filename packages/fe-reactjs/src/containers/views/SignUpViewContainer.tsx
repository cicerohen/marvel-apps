import { SignUpView } from "../../components/SignUpView";
import { useSignUpForm } from "../../components/SignUpForm/useSignUpForm";

export const SignUpViewContainer = () => {
  const form = useSignUpForm({
    onSubmit: (values) => {
      console.log("sign in form values", values);
    },
  });

  return <SignUpView formProps={form} />;
};
