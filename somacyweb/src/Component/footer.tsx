import React from 'react';
import { ShieldCheck, Radar, Share2, Play, Facebook, Youtube, Instagram, Twitter, Apple, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-4 pb-8 border-b border-gray-100">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-blue-600">Somacy</h1>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs font-medium">
              Rajasthan's premier RGHS-first healthcare ecosystem. We bridge the gap between quality medicine and cashless convenience for thousands of families.
            </p>
            {/* Social */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <Radar size={18} className="text-gray-400" />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <Share2 size={18} className="text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-gray-100 transition-colors shrink-0">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <p className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">contact@somacy.com</p>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-gray-100 transition-colors shrink-0">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <p className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">+91 1234567890</p>
              </div>
            </div>
          </div>
          {/* Services */}
          <div className="flex flex-col space-y-3 mt-2">
            <h3 className="text-sm font-bold text-gray-900 ">Primary Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Cashless RGHS Order</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Retail Medicine Store</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Diagnostic Lab Booking</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Ayurvedic Essentials</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className="flex flex-col space-y-3 mt-2">
            <h3 className="text-sm font-bold text-gray-900">RGHS Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">How RGHS Works?</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">View Wallet Balance</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Approved Hospital List</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Help & Support</a></li>

            </ul>
          </div>
          <div className="flex flex-col space-y-3 mt-2">
            <h3 className="text-sm font-bold text-gray-900">Our Company </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">About us</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Contact us</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          {/* Policies */}
          <div className="flex flex-col space-y-3 mt-2">
            <h3 className="text-sm font-bold text-gray-900">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">License Agreement</a></li>
              <li><a href="#" className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4 mt-2">
            {/* Follow */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Follow Us On</h3>
              {/* Media */}
              <div className="flex items-center space-x-4">
                <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                  <Facebook size={20} className="text-gray-400" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                  <Youtube size={20} className="text-gray-400" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                  <Instagram size={20} className="text-gray-400" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                  <Twitter size={20} className="text-gray-400" />
                </a>
              </div>
            </div>

            {/* App */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Download App</h3>
              {/* Links */}
              <div className="flex flex-row gap-3">
                <a href="#" className="bg-black text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors shrink-0 overflow-hidden">
                  <Apple size={20} fill="currentColor" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] uppercase font-medium text-gray-400 mb-0.5">Download on</span>
                    <span className="text-[11px] font-bold">App Store</span>
                  </div>
                </a>
                <a href="#" className="bg-black text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors shrink-0 overflow-hidden">
                  <Play size={20} fill="currentColor" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] uppercase font-medium text-gray-400 mb-0.5">Get it on</span>
                    <span className="text-[11px] font-bold">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
              Fully integrated with Rajasthan State e-Governance framework.
            </p>
          </div>
        </div>
        {/* Footer-Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-6 text-gray-400">
          <p className="text-[11px] font-semibold uppercase tracking-wider">
            © 2024 Somacy Healthcare Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
