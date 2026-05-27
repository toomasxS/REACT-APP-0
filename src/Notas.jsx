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
                    <input type="number" className="form-control" value={formData.atitudes} max="           20" min="0" onChange={(e) => setFormData({ ...formData, atitudes: e.target.value })} />
                </div>
            </div>
            <button className="btn btn-success mr-2">Calcular</button>
            <button className="btn btn-danger mr-2">Limpar</button>
        </>
    );
}
export default Notas;