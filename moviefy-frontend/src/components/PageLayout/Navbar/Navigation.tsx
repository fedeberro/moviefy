import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "./navItems";
import useAuth from "@/hooks/useAuth";
import { useMemo } from "react";

export default function Navigation() {
  const { pathname } = useLocation();
  const { currentUser } = useAuth();

  const navItems = useMemo(() => {
    if (!currentUser) return NAV_ITEMS.filter((nav) => !nav.auth);
    return NAV_ITEMS;
  }, [currentUser]);

  return (
    <div className="flex gap-4 items-center">
      {navItems.map((item) => (
        <Link
          to={item.path}
          className={`text-m font-medium transition-colors hover:text-primary transition-color duration-300 ${
            pathname !== item.path ? "text-muted-foreground" : ""
          }`}
          key={item.path}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
