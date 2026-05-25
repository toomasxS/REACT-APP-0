import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: ''
    });

    const [notas, setNotas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);
    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos

        const novaNota = {
            id: Date.now(),
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setNotas([...notas, novaNota]);
    }

    function newNota() {
        const novaNota = {
            id: Date.now(),
            titulo: 'Euzinho',
            data: 'euzinho é o melhor',
            descricao: 'uiuiuiuiu'
        };
        setFormData(novaNota);
        setNotas([...notas, novaNota]);
        setDadosSubmetidos(null);
    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }

    function eliminarNota(id) {
        const notasAtualizadas = notas.filter((nota) => nota.id !== id);
        setNotas(notasAtualizadas);
    }

    function LimparNotas(id) {
        setNotas([]);
    }

    return (
        <div className="mt-4 row">

            <div className="col-6">

                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="mt-4">
                        <label>Título</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>
                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" value={formData.data} onChange={(e) =>
                            setFormData({ ...formData, data: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <textarea className="form-control" rows="3" value={formData.descricao} onChange={(e) =>
                            setFormData({ ...formData, descricao: e.target.value })}></textarea>
                    </div>





                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={newNota}>Nova Nota</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={LimparNotas}>Limpar Notas</button>

                </form>
            </div >








            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Título:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        </div>
                    </div>
                )}

                <h3 className="mt-4">Lista de Notas</h3>
                <ul className="list-group">
                    {notas.map((nota) => (
                        <li key={nota.id} className="list-group-item">
                            <h5>{nota.titulo}</h5>
                            <p>{nota.data}</p>
                            <p>{nota.descricao}</p>
                            <button className="btn btn-danger btn-sm" onClick={() => eliminarNota(nota.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div >

    );
}
export default Notas;