import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CursoForm = () => {
  const [cursos, setCursos] = useState([]);
  const [nombreCurso, setNombreCurso] = useState('');
  const [creditos, setCreditos] = useState('');
  const [descripcion, setDescripcion] = useState('');
  
  // Cargar los cursos desde el endpoint
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get('https://test-deploy-12.onrender.com/cursos');
        setCursos(response.data);
      } catch (error) {
        console.error('Error al cargar los cursos', error);
      }
    };
    fetchCursos();
  }, []);
  
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Curso guardado:', { nombreCurso, creditos, descripcion });
    
    // Limpiar el formulario
    setNombreCurso('');
    setCreditos('');
    setDescripcion('');
  };

  // Función para limpiar el formulario
  const handleClear = () => {
    setNombreCurso('');
    setCreditos('');
    setDescripcion('');
  };

  return (
    <div>
      <h1>Formulario de Curso</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Curso:</label>
          <input 
            type="text" 
            value={nombreCurso} 
            onChange={(e) => setNombreCurso(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Créditos:</label>
          <input 
            type="number" 
            value={creditos} 
            onChange={(e) => setCreditos(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            placeholder="Incluye carnet, nombre completo y sección" 
            required 
          />
        </div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleClear}>Limpiar</button>
      </form>
    </div>
  );
};

export default CursoForm;
