import { FormikHandlers, FormikState } from "formik";
import { View } from "./View";
import { SignUpForm } from "./SignUpForm";
import { Values } from "./SignUpForm/useSignUpForm";

type Props = {
  formProps: FormikHandlers & FormikState<Values>;
};

export const SignUpView = ({ formProps }: Props) => {
  return (
    <View>
      <SignUpForm
        {...formProps}
        className="max-w-lg mx-auto h-full flex flex-col justify-center"
      />
    </View>
  );
};
