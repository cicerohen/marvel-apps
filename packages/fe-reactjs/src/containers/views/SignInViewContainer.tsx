import { SignInView } from "../../components/SignInView";
import { useSignInForm } from "../../components/SignInForm/useSignInForm";

export const SignInViewContainer = () => {
  const form = useSignInForm({
    onSubmit: (values) => {
      console.log("sign in form values", values);
    },
  });

  return <SignInView formProps={form} />;
};
