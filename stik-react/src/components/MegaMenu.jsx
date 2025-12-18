import React from 'react'

export default function MegaMenu({ visible, columns = [] }){
  return (
    <div className={`mega-menu ${visible ? 'visible' : ''}`} role="menu" aria-hidden={!visible}>
      <div className="mega-menu-inner">
        {columns.map((col, i) => (
          <ul key={i} className="mega-col">
            {col.map((item, idx) => (
              <li key={idx} className="mega-item">
                {/* item não é clicável, só hover mostra submenu (se quiser sublistas, adapte) */}
                <button type="button" className="mega-link">{item}</button>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}