import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ErrorMessage, Form, FormItem } from './styles';
import { CharacterValues, GenderTypes, ICharacterProps } from '../../../types';
import { editCharacter } from '../../../store/actions';

const CharacterForm: React.FC<ICharacterProps> = ({ character }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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
      dispatch(editCharacter(values));
      history.push('/');
      toast.success('Salvo com sucesso');
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
          data-testid="name"
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
          data-testid="real_name"
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
          data-testid="aliases"
          name="aliases"
          type="text"
          onChange={handleChange}
          value={values.aliases}
        />
      </FormItem>

      <FormItem>
        <label htmlFor="gender">Gênero</label>
        <select
          id="gender"
          data-testid="gender"
          name="gender"
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
          data-testid="birth"
          name="birth"
          type="date"
          onChange={handleChange}
          value={values.birth}
        />
      </FormItem>

      <button type="submit">Salvar</button>
    </Form>
  );
};

export default CharacterForm;
