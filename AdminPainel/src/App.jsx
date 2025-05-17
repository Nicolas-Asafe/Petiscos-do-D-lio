import React, { useState, useEffect } from 'react';
import api from './api'; // api.js tem que ter a baseURL '/products'

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    Name: '',
    Description: '',
    Price: '',
    Image: '',
    Category: ''
  });

  // Pega todos os produtos ao abrir
  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const res = await api.get('/Products');
      if (res.data.status) setProdutos(res.data.products); // 'data.data' porque seu backend responde { data: [...] }
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const adicionarProduto = async () => {
    try {
      const res = await api.post('/Products', {
        ...form,
        Price: parseFloat(form.Price)
      });
      if (res.status) {
        alert('Produto criado!');
        setForm({ Name: '', Description: '', Price: '', Image: '', Category: '' });
        fetchProdutos();
      }
    } catch (err) {
      console.error('Erro ao criar produto:', err);
      alert('Erro ao criar produto');
    }
  };

  const deletarProduto = async (id) => {
    if (!confirm('Tem certeza que quer apagar esse produto?')) return;
    try {
      const res = await api.delete(`/Products/${id}`);
      if (res.status) {
        alert('Produto deletado!');
        fetchProdutos();
      }
    } catch (err) {
      console.error('Erro ao deletar produto:', err);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>🛒 Lista de Produtos</h1>

      <div style={{ marginBottom: 20 }}>
        <h2>➕ Novo Produto</h2>
        <input name="Name" placeholder="Nome" value={form.Name} onChange={handleChange} /><br />
        <input name="Description" placeholder="Descrição" value={form.Description} onChange={handleChange} /><br />
        <input name="Price" placeholder="Preço" type="number" value={form.Price} onChange={handleChange} /><br />
        <input name="Image" placeholder="URL da imagem" value={form.Image} onChange={handleChange} /><br />
        <input name="Category" placeholder="Categoria" value={form.Category} onChange={handleChange} /><br />
        <button onClick={adicionarProduto}>Salvar Produto</button>
      </div>

      <div>
        <h2>📦 Produtos Cadastrados</h2>
        {produtos.length === 0 && <p>Nenhum produto encontrado.</p>}
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {produtos.map((p) => (
            <li key={p._id} style={{ marginBottom: 15, borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
              <strong>{p.Name}</strong> - R$ {p.Price.toFixed(2)} <br />
              {p.Image && <img src={p.Image} alt={p.Name} width="100" style={{ marginTop: 5 }} />}<br />
              <small>{p.Description}</small><br />
              <button onClick={() => deletarProduto(p._id)}>🗑️ Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
