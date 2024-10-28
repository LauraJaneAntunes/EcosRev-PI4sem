"use client";

import { withDataFetching } from "@/components/HOCS/withDataFetching";
import EditTemplate from "@/components/templates/beneficio/EditTemplate";
import { env } from "@/config/env";
import { IBeneficios } from "@/interfaces/IBeneficios";
import { useEffect, useState } from "react";

interface BeneficioEditProps {
  params: { slug: string };
  data: any;
}

const ProductEdit: React.FC<BeneficioEditProps> = ({ params, data }) => {
  const [beneficio, setBeneficio] = useState<IBeneficios>();

  useEffect(() => {
    if (!data) return;
    const {
      id,
      nome: name,
      endereco: address,
      pontos: points,
      qtd: qtd,
    } = data.beneficio;

    setBeneficio({
      id,
      name,
      address,
      points,
      qtd,
    });
  }, [data]);

  return <EditTemplate beneficio={beneficio} />;
};

export default withDataFetching(`${env.apiBaseUrl}/beneficios`)(ProductEdit);
