import React from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Field = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  rows?: number;
};

type Props = {
  form: FormData;
  formFields: Field[];
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const ContactFormFields: React.FC<Props> = ({
  form,
  formFields,
  handleChange,
}) => {
  return (
    <>
      <div className="input-row">
        {formFields.slice(0, 2).map((field) => (
          <div className="input-group" key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div className="input-group full">
        <label>{formFields[2].label}</label>
        <textarea
          name={formFields[2].name}
          rows={formFields[2].rows}
          placeholder={formFields[2].placeholder}
          value={form[formFields[2].name as keyof typeof form]}
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};

export default ContactFormFields;
