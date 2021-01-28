import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage, Form, FormItem } from './styles';
import { Character, GenderTypes } from '../../Home';

interface ICharacterProps {
  character: Character;
}

export interface CharacterValues {
  id: number;
  aliases: string;
  birth?: string;
  gender: GenderTypes;
  name: string;
  real_name: string;
}

const CharacterForm: React.FC<ICharacterProps> = ({ character }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    aliases: Yup.string().required('O campo Apelidos é obrigatório'),
    name: Yup.string().required('O campo Nome é obrigatório'),
    real_name: Yup.string().required('O campo Nome Verdadeiro é obrigatório'),
  });

  const formik = useFormik<CharacterValues>({
    initialValues: {
      id: character.id,
      aliases: character.aliases.replace(/\n/g, ', '),
      birth: character.birth || '',
      gender: character.gender,
      name: character.name,
      real_name: character.real_name,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch({ type: 'EDIT_CHARACTER', payload: values });
    },
  });

  const handleSelectChange = (field: string) => (value: any) => {
    formik.setFieldValue(field, value.target.value);
  };

  const { errors, handleChange, handleSubmit, touched, values } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem>
        <label htmlFor="name">Nome</label>
        {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
        />
      </FormItem>

      <FormItem>
        <label htmlFor="real_name">Nome Verdadeiro</label>
        {errors.real_name && touched.real_name && <ErrorMessage>{errors.real_name}</ErrorMessage>}
        <input
          id="real_name"
          name="real_name"
          type="text"
          onChange={handleChange}
          value={values.real_name}
        />
      </FormItem>

      <FormItem>
        <label htmlFor="aliases">Apelidos</label>
        {errors.aliases && touched.aliases && <ErrorMessage>{errors.aliases}</ErrorMessage>}
        <input
          id="aliases"
          name="aliases"
          type="text"
          onChange={handleChange}
          value={values.aliases}
        />
      </FormItem>

      <FormItem>
        <label htmlFor="gender">Gênero</label>
        <select
          name="gender"
          id="gender"
          value={values.gender}
          onChange={handleSelectChange('gender')}
        >
          <option value={GenderTypes.MALE}>Masculino</option>
          <option value={GenderTypes.FEMALE}>Feminino</option>
        </select>
      </FormItem>

      <FormItem>
        <label htmlFor="birth">Data de Nascimento</label>
        <input
          id="birth"
          name="birth"
          type="date"
          onChange={handleChange}
          value={values.birth}
        />
      </FormItem>

      <button type="submit">Submit</button>
    </Form>
  );
};

export default CharacterForm;
