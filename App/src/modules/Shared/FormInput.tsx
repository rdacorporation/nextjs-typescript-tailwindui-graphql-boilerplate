import React from 'react';
// eslint-disable-next-line import/named
import { Path, UseFormRegister } from 'react-hook-form';

interface InputProps<FormType> {
  label: string;
  type?: string;
  field: Path<FormType>;
  placeholder?: string;
  register: UseFormRegister<FormType>;
  required?: boolean;
}

export function FormInput<FormType>({ label, type, field, register, required, placeholder }: InputProps<FormType>) {
  return (
    <div className="form-control">
      <label htmlFor={field} className="label">
        {label}
      </label>
      <input className="input" placeholder={placeholder} type={type || 'text'} {...register(field, { required })} />
    </div>
  );
}
