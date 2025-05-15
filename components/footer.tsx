import { Code2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8" />
              <span className="font-bold text-xl">SAVVY Labs</span>
            </Link>
            <p className="text-muted-foreground">
              Leading software development and digital services company,
              delivering innovative solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/people"
                  className="text-muted-foreground hover:text-primary"
                >
                  Our People
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@softwaresavvylabs.com</li>
              <li>+201282335415</li>
              <li>Flat 22, Building 254, beverly hills sodic </li>
              <li>Giza, Egypt</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Software SAVVY Labs. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
