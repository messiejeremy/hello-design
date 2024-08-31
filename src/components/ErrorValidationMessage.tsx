export const ErrorValidationMessage = ({ error }: any) => {
  return (
    <>
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </>
  )
};