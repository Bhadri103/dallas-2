import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Factory, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
  const logo = "./images/logo.png";
interface SubItem {
  label: string;
  path: string;
  id?: string;
  subItems?: SubItem[];
}

interface NavItem {
  label: string;
  path: string;
  id?: string;
  subItems?: SubItem[];
}

interface DropdownState {
  [key: string]: boolean;
}

interface DesktopDropdownProps {
  item: NavItem | SubItem;
  isVisible: boolean;
  depth?: number;
}

interface MobileDropdownProps {
  item: NavItem | SubItem;
  depth?: number;
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({});
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Service", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contacts", path: "/contact" },
  ];

  // Scroll to top function
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle menu click with scroll to top
  const handleMenuClick = (): void => {
    scrollToTop();
    closeMobileMenu();
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdowns({});
        setHoverDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (itemId: string): void => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Handle desktop hover
  const handleDesktopMouseEnter = (itemId: string): void => {
    setHoverDropdown(itemId);
  };

  const handleDesktopMouseLeave = (): void => {
    setHoverDropdown(null);
  };

  // Close mobile menu
  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  // Desktop dropdown component
  const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
    item,
    isVisible,
    depth = 0,
  }) => {
    if (!item.subItems || !isVisible) return null;

    return (
      <div
        className={`absolute bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50 min-w-max ${
          depth === 0 ? "top-full left-0 mt-2" : "top-0 left-full ml-2"
        }`}
        style={{ minWidth: "220px" }}
      >
        {item.subItems.map((subItem: SubItem, index: number) => (
          <div
            key={subItem.path || subItem.id || `subitem-${index}`}
            className="relative group"
          >
            <Link
              to={subItem.path}
              onClick={scrollToTop}
              className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:text-red-600 transition-all duration-200 ${
                location.pathname === subItem.path
                  ? "text-red-600 font-medium"
                  : ""
              }`}
            >
              <span>{subItem.label}</span>
              {subItem.subItems && <ChevronRight size={16} className="ml-2" />}
            </Link>
            <DesktopDropdown
              item={subItem}
              isVisible={true}
              depth={depth + 1}
            />
          </div>
        ))}
      </div>
    );
  };

  // Mobile dropdown component
  const MobileDropdown: React.FC<MobileDropdownProps> = ({
    item,
    depth = 0,
  }) => {
    const hasSubItems: boolean = Boolean(
      item.subItems && item.subItems.length > 0
    );
    const isOpen: boolean = Boolean(item.id && openDropdowns[item.id]);

    return (
      <div
        className={`${depth > 0 ? "ml-4 border-l-2 border-gray-100 pl-4" : ""}`}
      >
        <div className="flex items-center">
          <Link
            to={item.path}
            onClick={handleMenuClick}
            className={`flex-1 block px-4 py-3 text-gray-800 hover:text-red-600 rounded-lg transition-all duration-200 ${
              location.pathname === item.path ? "text-red-600 font-medium" : ""
            }`}
          >
            {item.label}
          </Link>
          {hasSubItems && item.id && (
            <button
              onClick={() => toggleMobileDropdown(item.id!)}
              className="p-3 text-gray-600 hover:text-red-600 rounded-lg transition-all duration-200"
              type="button"
              aria-expanded={isOpen}
              aria-label={`Toggle ${item.label} menu`}
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {hasSubItems && isOpen && item.subItems && (
          <div className="mt-2 space-y-1">
            {item.subItems.map((subItem: SubItem, index: number) => (
              <MobileDropdown
                key={subItem.path || subItem.id || `mobile-subitem-${index}`}
                item={subItem}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50" ref={navRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3">
              {/* <Factory size={36} className="text-red-600" />
              <span className="text-lg font-bold">
                <span className="text-red-600">DALLAS</span>
                <span className="text-yellow-500">WALLCARE</span>
              </span> */}
<img src={logo} alt="" className="h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item: NavItem, index: number) => {
                const hasSubItems: boolean = Boolean(
                  item.subItems && item.subItems.length > 0
                );
                const showDropdown: boolean = Boolean(
                  item.id && hoverDropdown === item.id
                );

                return (
                  <div
                    key={item.path || item.id || `navitem-${index}`}
                    className="relative"
                    onMouseEnter={() =>
                      hasSubItems && item.id && handleDesktopMouseEnter(item.id)
                    }
                    onMouseLeave={() =>
                      hasSubItems && handleDesktopMouseLeave()
                    }
                  >
                    <Link
                      to={item.path}
                      onClick={scrollToTop}
                      className={`flex items-center gap-2 px-4 py-3 text-gray-800 hover:text-red-600 rounded-lg font-medium transition-all duration-200 ${
                        location.pathname === item.path ? "text-red-600" : ""
                      }`}
                    >
                      {item.label}
                      {hasSubItems && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            showDropdown ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                    <DesktopDropdown item={item} isVisible={showDropdown} />
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-800 hover:text-red-600 transition-all duration-200"
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navItems.map((item: NavItem, index: number) => (
              <MobileDropdown
                key={item.path || item.id || `mobile-navitem-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;