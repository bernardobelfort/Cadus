import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border transition-shadow">
      <div className="container flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="font-display font-800 text-lg md:text-xl text-primary tracking-tight">
          cadus<span className="text-highlight">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/cadastro" className="btn-ghost text-sm py-2 px-4">
            Entrar
          </Link>
          <Link to="/cadastro" className="btn-primary text-sm py-2 px-5">
            Cadastrar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-foreground hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-border bg-card overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              <Link to="/cadastro" className="btn-outline text-center min-h-[48px]" onClick={() => setMenuOpen(false)}>
                Entrar
              </Link>
              <Link to="/cadastro" className="btn-primary text-center min-h-[48px]" onClick={() => setMenuOpen(false)}>
                Cadastrar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
