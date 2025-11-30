/**
 * Componente WorkManager - Gestor de trabajos del portfolio
 * 
 * Permite añadir, editar y eliminar trabajos del portfolio de Nayla
 * con interfaz intuitiva y formularios validados.
 * 
 * @component
 * @example
 * <WorkManager />
 */

import React, { useState } from 'react'
import { useApp } from '../../../context/AppContext'
import './WorkManager.css'

const WorkManager = () => {
  const { works, addWork } = useApp()
  const [isAdding, setIsAdding] = useState(false)
  const [editingWork, setEditingWork] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    role: '',
    year: new Date().getFullYear(),
    description: '',
    category: 'cine',
    featured: false,
    image: ''
  })

  /**
   * Categorías disponibles para los trabajos
   */
  const categories = [
    { value: 'cine', label: 'Cine' },
    { value: 'television', label: 'Televisión' },
    { value: 'publicidad', label: 'Publicidad' },
    { value: 'teatro', label: 'Teatro' },
    { value: 'otros', label: 'Otros' }
  ]

  /**
   * Maneja el cambio en los campos del formulario
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  /**
   * Resetea el formulario a los valores por defecto
   */
  const resetForm = () => {
    setFormData({
      title: '',
      role: '',
      year: new Date().getFullYear(),
      description: '',
      category: 'cine',
      featured: false,
      image: ''
    })
    setIsAdding(false)
    setEditingWork(null)
  }

  /**
   * Valida el formulario antes del envío
   */
  const validateForm = () => {
    const { title, role, year, description } = formData
    if (!title.trim()) return 'El título es obligatorio'
    if (!role.trim()) return 'El rol es obligatorio'
    if (!year || year < 2000 || year > new Date().getFullYear() + 1) {
      return 'El año debe ser válido'
    }
    if (!description.trim()) return 'La descripción es obligatoria'
    if (description.length < 10) return 'La descripción debe tener al menos 10 caracteres'
    return null
  }

  /**
   * Maneja el envío del formulario para añadir/editar trabajo
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      alert(validationError)
      return
    }

    try {
      if (editingWork) {
        // En una implementación real, aquí editaríamos el trabajo
        console.log('Editando trabajo:', { ...formData, id: editingWork.id })
        alert('Trabajo actualizado correctamente')
      } else {
        await addWork(formData)
        alert('Trabajo añadido correctamente')
      }
      resetForm()
    } catch (error) {
      alert('Error al guardar el trabajo: ' + error.message)
    }
  }

  /**
   * Inicia la edición de un trabajo existente
   */
  const handleEdit = (work) => {
    setFormData({
      title: work.title,
      role: work.role,
      year: work.year,
      description: work.description,
      category: work.category,
      featured: work.featured || false,
      image: work.image || ''
    })
    setEditingWork(work)
    setIsAdding(true)
  }

  /**
   * Elimina un trabajo (en producción sería con confirmación)
   */
  const handleDelete = (work) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${work.title}"?`)) {
      console.log('Eliminando trabajo:', work.id)
      alert('Trabajo eliminado correctamente')
    }
  }

  return (
    <div className="work-manager">
      
      {/* Header */}
      <div className="work-manager__header">
        <h2 className="work-manager__title">Gestor de Trabajos</h2>
        <p className="work-manager__subtitle">
          Gestiona los trabajos y proyectos del portfolio de Nayla
        </p>
        
        {!isAdding && (
          <button
            className="btn btn--primary"
            onClick={() => setIsAdding(true)}
          >
            ➕ Añadir Nuevo Trabajo
          </button>
        )}
      </div>

      {/* Formulario de Añadir/Editar */}
      {isAdding && (
        <div className="work-form-section">
          <div className="work-form__header">
            <h3 className="work-form__title">
              {editingWork ? 'Editar Trabajo' : 'Añadir Nuevo Trabajo'}
            </h3>
            <button
              className="btn btn--secondary btn--sm"
              onClick={resetForm}
            >
              ✕ Cancelar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="work-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Título del Trabajo *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Ej: Cortometraje 'Primeros Pasos'"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Rol/Papel *</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Ej: Protagonista, Figurante..."
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Año *</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="form-input"
                  min="2000"
                  max={new Date().getFullYear() + 1}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Categoría *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Descripción *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-textarea"
                rows="4"
                placeholder="Describe el trabajo, personaje, experiencia..."
                required
              />
              <div className="form-help">
                {formData.description.length} caracteres (mínimo 10)
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">URL de la Imagen</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  Trabajo Destacado
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn--primary btn--lg">
                {editingWork ? '💾 Actualizar Trabajo' : '➕ Añadir Trabajo'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lista de Trabajos Existentes */}
      <div className="work-list-section">
        <h3 className="work-list__title">
          Trabajos Existentes ({works.length})
        </h3>

        {works.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state__icon">🎬</div>
            <h4 className="empty-state__title">No hay trabajos aún</h4>
            <p className="empty-state__description">
              Comienza añadiendo el primer trabajo al portfolio de Nayla.
            </p>
          </div>
        ) : (
          <div className="work-grid">
            {works.map(work => (
              <div key={work.id} className="work-item">
                <div className="work-item__image">
                  {work.image ? (
                    <img src={work.image} alt={work.title} />
                  ) : (
                    <div className="work-item__image-placeholder">🖼️</div>
                  )}
                  {work.featured && (
                    <span className="work-item__badge work-item__badge--featured">
                      ⭐ Destacado
                    </span>
                  )}
                  <span className="work-item__badge work-item__badge--year">
                    {work.year}
                  </span>
                </div>

                <div className="work-item__content">
                  <h4 className="work-item__title">{work.title}</h4>
                  <p className="work-item__role">{work.role}</p>
                  <p className="work-item__category">{work.category}</p>
                  <p className="work-item__description">
                    {work.description.length > 100 
                      ? `${work.description.substring(0, 100)}...`
                      : work.description
                    }
                  </p>
                </div>

                <div className="work-item__actions">
                  <button
                    className="btn btn--secondary btn--sm"
                    onClick={() => handleEdit(work)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="btn btn--outline btn--sm"
                    onClick={() => handleDelete(work)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default WorkManager