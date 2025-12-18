import React, { useState, useRef } from 'react'
import MegaMenu from './MegaMenu'
import '../../stylesheet/css/style.css'

const CATEGORIES = [
  { id: 'produtos', label: 'PRODUTOS', columns: [
      ['Elásticos Crus','Modeladores','Alças','Bases'],
      ['Viés','Premium','Rendas','Personalizados']
    ]
  },
  { id: 'sutias', label: 'SUTIÃS', columns: [
      ['Ver Todos','Sem Aro','Reforçados'],
      ['Push Up','Tomara Que Caia','Com Bojo']
    ]
  },
  // ...preencha com suas categorias reais (puxe do sidebar.html)
]

export default function Header(){
  const [open, setOpen] = useState(null)
  const closeTimer = useRef(null)

  function handleEnter(id){
    if (closeTimer.current) { clearTimeout(closeTimer.current) }
    setOpen(id)
  }
  function handleLeave(){
    // pequeno delay para evitar flicker ao mover mouse
    closeTimer.current = setTimeout(()=> setOpen(null), 120)
  }

  return (
    <header className="top-header" id="mainHeader" onMouseLeave={handleLeave}>
      <div className="header-left">
        <button className="menu-toggle" aria-label="Abrir Menu">≡</button>
        <div className="header-logo"><a href="/"><img src="/img/logo 2_Prancheta 1.png" alt="Logo STIK"/></a></div>
      </div>

      <nav className="header-nav">
        {CATEGORIES.map(cat => (
          <div key={cat.id}
               className={`nav-item ${open === cat.id ? 'is-open' : ''}`}
               onMouseEnter={()=> handleEnter(cat.id)}>
            <button className="nav-label">{cat.label}</button>
            <MegaMenu visible={open === cat.id} columns={cat.columns} onMouseEnter={()=> handleEnter(cat.id)} onMouseLeave={handleLeave}/>
          </div>
        ))}
      </nav>

      <div className="header-right">
        <button id="theme-toggle" className="icon-btn">☀</button>
        {/* restante: search etc */}
      </div>
    </header>
  )
}