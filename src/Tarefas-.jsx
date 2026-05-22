import React, { useState } from 'react';

function Tarefas() {
    // Estado único "formData" guarda todos os campos do formulário num objeto
    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: ''
    });
    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);
    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        const novoid = { ...formData, id: Date.now() };
        setDadosSubmetidos(novoid); // guarda os dados preenchidos com id único
    }
    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', titulo: '', data: '', descricao: ''});
        setDadosSubmetidos(null);
    }
    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit}>
                {/* Cada campo é controlado — o valor vem do estado React */}
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>

                        setFormData({ ...formData, titulo: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Data</label>
                    <input type="tel" className="form-control" value={formData.data} onChange={(e) =>

                        setFormData({ ...formData, data: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>

                        setFormData({ ...formData, descricao: e.target.value })} required />
                </div>

                {/* Botões de ação */}
                <button className="btn btn-success mr-2">Enviar</button>

                <button type="button" className="btn btn-outline-secondary"

                    onClick={limparFormulario}>Limpar</button>
            </form>
            {/* Mostra os dados submetidos se existirem */}
            {dadosSubmetidos && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Dados Recebidos</h5>
                        <p><strong>Id:</strong> {dadosSubmetidos.id}</p>
                        <p><strong>Título:</strong> {dadosSubmetidos.titulo}</p>
                        <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                        <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Tarefas;