export type FieldProps = {
  id: string;
  label: string;
  name: string;
  component: "input" | "textarea";
  type?: string;
  value?: string;
  classNames?: string;
  placeholder: string;
};
