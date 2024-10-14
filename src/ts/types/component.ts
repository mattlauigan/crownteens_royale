export type FormProps = {
  htmlFor?: string;
  label?: string;
  labelClass?: string;
  tagClass?: string;
  containerClass?: string;
  fetching?: boolean;
  loading?: boolean;
  disabled?: boolean;
  primary?: boolean;
  topLabel?: boolean;
  required?: boolean;
  hasError?: boolean;
  inputError?: string;
  readOnly?: boolean;
};


export type CartDataType = {
  id: number;
  name: string;
  productdetail: string;
  quantity: number;
  price: number;
};
