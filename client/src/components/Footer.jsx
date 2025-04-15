import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t bg-[#F0F4F8]">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#4F6BED]">CampusExchange</h3>
            <p className="text-sm text-muted-foreground">
              The marketplace for students to buy, sell, and trade items on campus.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/textbooks" className="text-muted-foreground hover:text-[#4F6BED]">
                  Textbooks
                </Link>
              </li>
              <li>
                <Link to="/categories/furniture" className="text-muted-foreground hover:text-[#4F6BED]">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/categories/electronics" className="text-muted-foreground hover:text-[#4F6BED]">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/categories/other" className="text-muted-foreground hover:text-[#4F6BED]">
                  Other Items
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-[#4F6BED]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/safety-tips" className="text-muted-foreground hover:text-[#4F6BED]">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-[#4F6BED]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-[#4F6BED]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-[#4F6BED]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-[#4F6BED]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-[#4F6BED]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CampusExchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
