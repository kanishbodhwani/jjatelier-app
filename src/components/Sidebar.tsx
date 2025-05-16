import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-[200px] h-screen overflow-y-auto fixed left-0 top-0 p-8 border-r border-border bg-white">
      <div className="flex flex-col h-full">
        <div className="mb-16">
          <Link to="/" className="block mb-2 text-xl font-semibold">
            凯鸿
          </Link>
          <nav className="space-y-6">
            <div>
              <Link to="/about" className="sidebar-link">About</Link>
              <Link to="/ideas" className="sidebar-link">Ideas</Link>
              <Link to="/cv" className="sidebar-link">CV</Link>
            </div>
            
            <div>
              <div className="section-title">HUMAN INTERFACE</div>
              <div className="space-y-1">
                <Link to="/projects/apple" className="sidebar-link">Apple</Link>
                <Link to="/projects/goodnotes" className="sidebar-link">GoodNotes</Link>
              </div>
            </div>
            
            <div>
              <div className="section-title">WEB INTERFACE</div>
              <div className="space-y-1">
                <Link to="/projects/berkeleytime" className="sidebar-link">Berkeleytime</Link>
                <Link to="/projects/marqeta" className="sidebar-link">Marqeta</Link>
                <Link to="/projects/propertyguru" className="sidebar-link">PropertyGuru</Link>
                <Link to="/projects/micro-interactions" className="sidebar-link">Micro-Interactions</Link>
              </div>
            </div>
            
            <div>
              <div className="section-title">CONTACT</div>
              <div className="space-y-1">
                <a href="mailto:contact@example.com" className="sidebar-link">Mail</a>
                <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="sidebar-link">Twitter</a>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="sidebar-link">LinkedIn</a>
                <Link to="/cv" className="sidebar-link">Read.cv</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;