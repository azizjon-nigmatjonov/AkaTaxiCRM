import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { TextareaAutosize } from '@mui/material';
import './style.scss'
interface Props {
  name: string;
  label?: string;
  required?: boolean;
  rules?: Record<string, unknown>;
  disabled?: boolean;
  defaultValue?: string;
  control?: any;
  setValue?: any;
  placeholder?: string;
}

export default function HFTextareaAutosize({
  name,
  label,
  required = false,
  rules = {},
  disabled = false,
  defaultValue = '',
  placeholder,
  control,
  setValue
}: Props) {
  // const { setValue, formState } = useForm();
  // const error: any = formState.errors[name];

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className="HFTextareaAutosize">
      {label && (
        <label>
          {label} {required && <span>*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: required ? 'This is a required field' : false,
          ...rules,

        }}
        render={({ field }) => (
          <TextareaAutosize
            {...field}
            placeholder={placeholder}
            disabled={disabled}
            minRows={10} // Adjust as needed
          />
        )}
      />
      {/* {error && <p className="error">{error.message}</p>} */}
    </div>
  );
}
