"use client";

import Layout from "@/components/UI/organisms/Layout";
import { IBeneficios } from "@/interfaces/IBeneficios";
import { BeneficioEditValidator } from "@/validators/BeneficioEditValidator";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";

interface EditTemplateProps {
  beneficio?: IBeneficios;
}

const EditTemplate: React.FC<EditTemplateProps> = ({ beneficio }) => {
  const formik = useFormik<IBeneficios>({
    initialValues: {
      name: "",
      address: "",
      points: 0,
      qtd: 0,
    },
    validationSchema: BeneficioEditValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    handleSubmit,
    values,
    handleChange,
    setFieldValue,
    errors,
    setValues,
  } = formik;

  useEffect(() => {
    if (!beneficio) return;

    const { id, ...prod } = beneficio;
    setValues(prod);
  }, [beneficio, setValues]);

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Nome"
          fullWidth
          value={values.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="address"
          label="Endereço"
          fullWidth
          value={values.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
        <TextField
          name="points"
          label="Pontos"
          fullWidth
          value={values.points}
          onChange={handleChange}
          error={!!errors.points}
          helperText={errors.points}
        />
        <TextField
          name="qtd"
          label="qtd"
          fullWidth
          value={values.qtd}
          onChange={handleChange}
          error={!!errors.qtd}
          helperText={errors.qtd}
        />
        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default EditTemplate;
