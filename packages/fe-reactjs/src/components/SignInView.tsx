import { FormikHandlers, FormikState } from "formik";
import { View } from "./View";
import { SignInForm } from "./SignInForm";
import { Values } from "./SignInForm/useSignInForm";

type Props = {
  formProps: FormikHandlers & FormikState<Values>;
};

export const SignInView = ({ formProps }: Props) => {
  return (
    <View>
      <SignInForm
        {...formProps}
        className="max-w-lg mx-auto h-full flex flex-col justify-center"
      />
    </View>
  );
};
