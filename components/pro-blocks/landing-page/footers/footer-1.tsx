"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";

export function Footer1() {
  return (
    <footer
      className="bg-black text-white py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="Go to homepage">
              <Logo />
            </Link>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <Link
                href="/about"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                О нас
              </Link>
              <Link
                href="/how-it-works"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Как это работает
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <Link
                href="/mentors"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                Наши менторы
              </Link>
              
            </div>

            {/* Column 3 - Contact Info Header */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">
                Связаться с нами
              </h3>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Company Info */}
        <div className="mb-8">
          <p className="text-gray-300 mb-2">
            Юридический адрес компании:
          </p>
          <p className="text-white mb-4">
            ул.Абиша Кекилбаева 270/2
          </p>
          <p className="text-white">
            БИН: 921202350217
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/gc_education_team?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Instagram</p>
              <p className="text-gray-300 text-sm">@gc_eduteam</p>
            </div>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://api.whatsapp.com/send?phone=77071082424"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">WhatsApp</p>
              <p className="text-gray-300 text-sm">+7 707 108 24 24</p>
            </div>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+77071082424"
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Контактный номер</p>
              <p className="text-gray-300 text-sm">+7 707 108 24 24</p>
            </div>
          </Link>

          {/* Email */}
          <Link
            href="mailto:gceducation24@gmail.com"
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-gray-300 text-sm">gceducation24@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
