// components/BenefitList.tsx
import React, { useEffect, useState } from "react";
import { Benefit } from "./types";
import { benefitsService } from "./BenefitService";

export const BenefitList = () => {
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<Benefit, "id">>({
    nome: "",
    data: "",
    endereco: "",
    pontos: 0,
    quantidade: 0,
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    loadBenefits();
  }, []);

  const loadBenefits = async () => {
    try {
      setLoading(true);
      const data = await benefitsService.getAll();
      setBenefits(data);
    } catch (err) {
      setError("Erro ao carregar benefícios");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "pontos" || name === "quantidade" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId !== null) {
        await benefitsService.update(editingId, formData);
      } else {
        await benefitsService.create(formData);
      }
      setFormData({
        nome: "",
        data: "",
        endereco: "",
        pontos: 0,
        quantidade: 0,
      });
      setEditingId(null);
      await loadBenefits();
    } catch (err) {
      setError("Erro ao salvar benefício");
    }
  };

  const handleEdit = (benefit: Benefit) => {
    setFormData({
      nome: benefit.nome,
      data: benefit.data,
      endereco: benefit.endereco,
      pontos: benefit.pontos,
      quantidade: benefit.quantidade,
    });
    setEditingId(benefit.id);
  };

  const handleDelete = async (id: number) => {
    try {
      await benefitsService.delete(id);
      await loadBenefits();
    } catch (err) {
      setError("Erro ao deletar benefício");
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Benefícios</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Nome"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
            placeholder="Data"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.endereco}
            onChange={handleInputChange}
            placeholder="Endereço"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="points"
            value={formData.pontos}
            onChange={handleInputChange}
            placeholder="Pontos"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="qtd"
            value={formData.quantidade}
            onChange={handleInputChange}
            placeholder="Quantidade"
            className="p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingId !== null ? "Atualizar" : "Criar"} Benefício
        </button>
      </form>

      <div className="grid gap-4">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{benefit.nome}</h2>
            <p>Data: {benefit.data}</p>
            <p>Endereço: {benefit.endereco}</p>
            <p>Pontos: {benefit.pontos}</p>
            <p>Quantidade: {benefit.quantidade}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(benefit)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(benefit.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
