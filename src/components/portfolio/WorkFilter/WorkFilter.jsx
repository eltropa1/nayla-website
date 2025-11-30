/**
 * Componente WorkFilter - Filtros y ordenamiento para el portfolio
 * 
 * Permite filtrar trabajos por categoría y ordenarlos por diferentes criterios
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.categories - Lista de categorías disponibles
 * @param {string} props.activeFilter - Filtro activo actual
 * @param {function} props.onFilterChange - Función para cambiar filtro
 * @param {string} props.sortBy - Criterio de ordenamiento actual
 * @param {function} props.onSortChange - Función para cambiar ordenamiento
 * @example
 * <WorkFilter 
 *   categories={['todos', 'cine', 'television']}
 *   activeFilter="todos"
 *   onFilterChange={handleFilterChange}
 *   sortBy="recientes"
 *   onSortChange={handleSortChange}
 * />
 */

import React from 'react'
import './WorkFilter.css'

const WorkFilter = ({ 
  categories, 
  activeFilter, 
  onFilterChange, 
  sortBy, 
  onSortChange 
}) => {
  /**
   * Opciones de ordenamiento
   */
  const sortOptions = [
    { value: 'recientes', label: 'Más Recientes' },
    { value: 'antiguos', label: 'Más Antiguos' },
    { value: 'destacados', label: 'Destacados' }
  ]

  /**
   * Mapear categorías a nombres legibles
   */
  const getCategoryLabel = (category) => {
    const labels = {
      'todos': 'Todos',
      'cine': 'Cine',
      'television': 'Televisión',
      'publicidad': 'Publicidad',
      'teatro': 'Teatro'
    }
    return labels[category] || category
  }

  return (
    <div className="work-filter">
      {/* Filtros por categoría */}
      <div className="work-filter__group">
        <label className="work-filter__label">Filtrar por:</label>
        <div className="work-filter__buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`work-filter__button ${
                activeFilter === category ? 'work-filter__button--active' : ''
              }`}
              onClick={() => onFilterChange(category)}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Ordenamiento */}
      <div className="work-filter__group">
        <label className="work-filter__label">Ordenar por:</label>
        <select 
          className="work-filter__select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

// ✅ Asegurar export default
export default WorkFilter