"use client";

import React from "react";
import { ColorPicker } from "../../styles/color";
import AOSWrapper from "../ui/FadeUp";

export default function ContactForm() {
  return (
    <form className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
      <AOSWrapper duration={1400} easing="ease-out" once={false}>
        <div data-aos="fade-up">
          {/* Name Field */}
          <input
            name="name"
            style={{ backgroundColor: ColorPicker.bg }}
            placeholder="Your name"
            className="w-full p-2 mb-3 rounded-lg border border-[#343434] placeholder:text-[#8d8b8b]"
            required
          />

          {/* Email Field */}
          <input
            name="email"
            type="email"
            style={{ backgroundColor: ColorPicker.bg }}
            className="w-full p-2 mb-3 rounded-lg border border-[#343434] placeholder:text-[#8d8b8b]"
            placeholder="you@example.com"
            required
          />

          {/* Subject Field */}
          <input
            name="subject"
            style={{ backgroundColor: ColorPicker.bg }}
            className="w-full p-2 mb-3 rounded-lg border border-[#343434] placeholder:text-[#8d8b8b]"
            placeholder="What is this about?"
          />

          {/* Message Field */}
          <textarea
            name="message"
            rows={4}
            cols={30}
            style={{ backgroundColor: ColorPicker.bg }}
            className="p-2 w-full mb-3 rounded-lg border border-[#343434] placeholder:text-[#8d8b8b]"
            placeholder="Tell us about your project or question"
            required
          />

          {/* Phone Field */}
          <input
            name="phone"
            style={{ backgroundColor: ColorPicker.bg }}
            className="p-2 w-full mb-3 rounded-lg border border-[#343434] placeholder:text-[#8d8b8b]"
            placeholder="Phone Number (Optional)"
          />

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              style={{ backgroundColor: ColorPicker.primary }}
              className="p-2 w-full rounded-lg font-semibold cursor-pointer text-[#1a1a1a]"
            >
              Send Message
            </button>
          </div>
        </div>

      </AOSWrapper>
    </form>
  );
}
