import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        nome: '',
        disciplina: '',
        notaTeste: '',
        notaTrabalho: '',
        notaAtitudes: '',
        testes: '',
        trabalhos: '',
        atitudes: ''
    });

    const [mediaPonderada, setMediaFinal] = useState(null);

    function Calcular() {
        const notaTeste = parseFloat(formData.notaTeste) || 0;
        const notaTrabalho = parseFloat(formData.notaTrabalho) || 0;
        const notaAtitudes = parseFloat(formData.notaAtitudes) || 0;

        const testesPeso = parseFloat(formData.testes) || 0;
        const trabalhosPeso = parseFloat(formData.trabalhos) || 0;
        const atitudesPeso = parseFloat(formData.atitudes) || 0;

        const mediaPonderada = (notaTeste * testesPeso + notaTrabalho * trabalhosPeso + notaAtitudes * atitudesPeso) / (testesPeso + trabalhosPeso + atitudesPeso);

        setMediaFinal(mediaPonderada.toFixed(2));
    }

    function limparFormulario() {
        setFormData({ nome: '', disciplina: '', notaTeste: '', notaTrabalho: '', notaAtitudes: '', testes: '', trabalhos: '', atitudes: '' });
        setMediaFinal(null);
    }

    return (
        <>
            <div className="row">
                <div className="col-8">
                    <label>Nome do Aluno:</label>
                    <input type="text" className="form-control" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
                </div>
                <div className="col-4">
                    <label>Disciplina:</label>
                    <input type="text" className="form-control" value={formData.disciplina} onChange={(e) => setFormData({ ...formData, disciplina: e.target.value })} />
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <label>Nota Teste:</label>
                    <input type="number" className="form-control" value={formData.notaTeste} max="20" min="0" onChange={(e) => setFormData({ ...formData, notaTeste: e.target.value })} />
                </div>
                <div className="col-3">
                    <label>Testes (%):</label>
                    <input type="number" className="form-control" value={formData.testes} max="40" min="0" onChange={(e) => setFormData({ ...formData, testes: e.target.value })} />
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <label>Nota Trabalho:</label>
                    <input type="number" className="form-control" value={formData.notaTrabalho} max="20" min="0" onChange={(e) => setFormData({ ...formData, notaTrabalho: e.target.value })} />
                </div>
                <div className="col-3">
                    <label>Trabalhos (%):</label>
                    <input type="number" className="form-control" value={formData.trabalhos} max="40" min="0" onChange={(e) => setFormData({ ...formData, trabalhos: e.target.value })} />
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <label>Nota Atitudes:</label>
                    <input type="number" className="form-control" value={formData.notaAtitudes} max="20" min="0" onChange={(e) => setFormData({ ...formData, notaAtitudes: e.target.value })} />
                </div>
                <div className="col-3">
                    <label>Atitudes (%):</label>
                    <input type="number" className="form-control" value={formData.atitudes} max="20" min="0" onChange={(e) => setFormData({ ...formData, atitudes: e.target.value })} />
                </div>
            </div>
            <div className="mt-3">
                <button className="btn btn-success mr-2" onClick={Calcular}>Calcular</button>
                <button className="btn btn-danger mr-2" onClick={limparFormulario}>Limpar</button>
            </div>
            <div className="text-center mt-4">
                {parseFloat(mediaPonderada) >= 9.5 &&
                 <p className="alert alert-success">
                    Aluno Aprovado!
                </p>
                }
                {parseFloat(mediaPonderada) < 9.5 &&
                 <p className="alert alert-danger">
                    Aluno Reprovado!
                </p>
                }
                Media Ponderada: {mediaPonderada}

            </div>
        </>
    );
}
export default Notas;