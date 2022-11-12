type Props = React.InputHTMLAttributes<HTMLInputElement> &
  Partial<{
    label: React.ReactNode;
    errorMessage: React.ReactNode;
  }>;

export const Field = ({ label, errorMessage, ...rest }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="your@email"
        className="border border-gray-200 p-4 rounded-lg"
        {...rest}
      />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};
